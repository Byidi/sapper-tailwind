<script>
	import { goto, stores } from '@sapper/app'
	import { flashes } from '../stores/flashes.js'

	const { session } = stores()

	let username = null;
    let email = null;
	let password = null;
    let passwordc = null;
	let status = null
	let step = 'form';

	export let handleSubmit = async function(event) {
		if(!event.target.checkValidity()) {
            return;
        }

		if(password !== passwordc){
			error = 'Passwords doesn\'t match';
			return;
		}

        fetch("auth/register",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			})
        }).then(r => {
	        status = r.status;
	        return r.json();
	    })
		.then( json => {
			if (status === 201){
				$flashes = [...$flashes, {
					type: 'success',
					message : 'Your account have been created, you can now log in',
				}];
				goto('login');
			}else{
				json.forEach((obj) => {
					$flashes = [...$flashes, {
						type: 'error',
						message : obj.message,
					}];
				});
			}
	    });
    }

</script>

<style type="text/scss">
    #register{
		@apply w-screen flex justify-center items-center;
    }
</style>

{#if step === 'form'}
	<div id="register">
	    <div class="form">
			<label class="error">Username : </label>
	        <input type="text" name="username" placeholder="username" bind:value={username}/>
			<label>Email : </label>
	        <input type="text" name="email" placeholder="email" bind:value={email}/>
			<label>Password : </label>
	        <input type="password" name="password" placeholder="password" bind:value={password}/>
			<label>Password confirmation: </label>
	        <input type="password" name="passwordc" placeholder="passwordc" bind:value={passwordc}/>
	        <button disabled={!username || !email || !password || !passwordc }
				on:click|preventDefault={handleSubmit}>
	            Submit
	        </button>
	    </div>
	</div>
{:else}
	Register success
{/if}
