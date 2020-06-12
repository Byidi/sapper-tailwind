<script>
	import Profil from '../components/Profil.svelte';
	import { goto, stores } from '@sapper/app';

	const { session } = stores();

	if(!$session.authenticated){
		goto('/');
	}
</script>

<style>
</style>

<Profil />
