<script lang="ts">
	import '../styles/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>FLISOL Caaguazú 2026 — Desarrollo del Sitio Web</title>
</svelte:head>

{@render children()}
