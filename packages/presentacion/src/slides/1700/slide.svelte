<script lang="ts">
	import { Transition } from '@animotion/core';
	import CountdownDemo from '$lib/demos/CountdownDemo.svelte';
</script>

<Transition>
	<h2 class="text-center text-3xl font-bold text-flisol-blue-600">Demo: Countdown en tiempo real</h2>
	<p class="mt-2 text-center text-lg text-slate-500">
		Este componente corre en vivo con Svelte — ahora mismo
	</p>
</Transition>

<Transition class="mt-6 flex justify-center">
	<div class="w-full max-w-2xl">
		<CountdownDemo />
	</div>
</Transition>

<Transition class="mt-8 text-center">
	<div
		class="border-emerald-200 bg-emerald-50 inline-block rounded-xl border px-6 py-3"
	>
		<p class="text-emerald-600 text-sm">
			Clase reactiva <code class="rounded bg-white px-1">EventState</code> con
			<code class="rounded bg-white px-1">$state</code>
			+
			<code class="rounded bg-white px-1">$derived</code> +
			<code class="rounded bg-white px-1">NumberFlow</code>
			+
			<code class="rounded bg-white px-1">setInterval</code>. Todo reactivo. Sin recargar la
			página.
		</p>
	</div>
</Transition>
