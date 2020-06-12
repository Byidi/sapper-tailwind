<script>
	import { stores } from '@sapper/app';
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Flashes from '../components/Flashes.svelte';

	export let segment;
</script>

<style type="text/scss">
	main {
		@apply relative w-screen box-border bg-white p-5;
	}
</style>

<Tailwindcss />

<Navbar {segment}/>

<Flashes />

<main>
	<slot></slot>
</main>
