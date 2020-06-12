<script>
	import { goto, stores } from '@sapper/app'
	import { flashes } from '../stores/flashes.js'

	const { session } = stores()

    let username = null;
    let password = null;
	let status = null

	export let handleSubmit = async function(event) {
        if(!event.target.checkValidity()) {
            return;
        }

        fetch("auth/login",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
			body: JSON.stringify({
				username: username,
				password: password,
			})
        })
	    .then(r => {
	        status = r.status;
	        return r.json();
	    })
	    .then(json => {
			if (status === 200){
				$session.authenticated = true;
				$session.user = json;
				$flashes = [...$flashes, {
					type: 'success',
					message : 'Welcome back '+$session.user.username,
				}];
				goto('/');
			}else{
				console.log(json);
				$flashes = [...$flashes, {
					type: 'error',
					message : json.error,
				}];
			}
	    });
    }

</script>

<style type="text/scss">
#login{
	@apply w-screen flex justify-center items-center;
}
</style>

<div id="login">
    <div class="form">
        <input type="text" name="username" placeholder="username" bind:value={username}/>
        <input type="password" name="password" placeholder="password" bind:value={password}/>
        <button disabled={!username || !password} on:click|preventDefault={handleSubmit}>
            Submit
        </button>
    </div>
</div>
