<script>
	import { stores } from '@sapper/app';

	const { session } = stores();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Home</h1>
	{#if $session.authenticated}
		LOGGED as { $session.user.username }
	{/if}
