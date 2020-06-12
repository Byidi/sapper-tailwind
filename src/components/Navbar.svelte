<script>
	import { goto, stores } from '@sapper/app'

	export let segment;

	const { session } = stores()

    function handleLogout(){
		fetch("auth/logout",
	    {
	        method: 'POST',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        }
	    })
	    .then(() => {
			$session.authenticated = false;
	        $session.user = null;
	        goto('/');
	    });
    }
</script>

<style lang="scss">
    nav{
        border-bottom: 1px solid grey;
        display: flex;
        align-items: center;
        justify-content: start;
        a{
            color: black;
            padding: 1.1rem;
            &[aria-current]{
                color: orange;
            }
            &:hover{
                background-color: orange;
            }
        }
    }
</style>

<nav>
	<a aria-current='{segment === undefined ? "page" : undefined}' href='/'>Home</a>
    {#if $session.user}
		<a aria-current='{segment === "profil" ? "page" : undefined}'
			href='profil'>Profil</a>
		<a aria-current='{segment === "logout" ? "page" : undefined}'
			href='logout'
			on:click|preventDefault={handleLogout}>Logout</a>
    {:else}
        <a aria-current='{segment === "login" ? "page" : undefined}'
			href='login'>Login</a>
        <a aria-current='{segment === "register" ? "page" : undefined}'
			href='register'>Register</a>
    {/if}
</nav>
