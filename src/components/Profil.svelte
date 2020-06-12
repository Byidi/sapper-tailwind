<script>
	import { goto, stores } from '@sapper/app';

	const { session } = stores();
</script>

<svelte:head>
	<title>Profil</title>
</svelte:head>

<h1>Profil</h1>
	{#if $session.authenticated}
		<ul>
			<li>Name: {$session.user.username}</li>
			<li>
				Roles:
				<ul>
				{#each $session.user.roles as role}
					<li>{role}</li>
				{/each}
				</ul>
			</li>
		</ul>
	{/if}
