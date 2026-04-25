<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">¿Por qué SvelteKit?</h2>
</Transition>

<div class="mt-10 grid grid-cols-2 gap-8">
	<Transition order={1} class="rounded-xl border border-flisol-blue-400/20 bg-white p-6 shadow-sm">
		<p class="text-flisol-blue-300 text-xl font-semibold">Reactividad compilada</p>
		<p class="mt-2 text-base text-slate-600">
			El compilador genera JS vanilla optimizado. Sin Virtual DOM. Reactividad granular a nivel de
			variable.
		</p>
	</Transition>

	<Transition order={2} class="rounded-xl border border-emerald-200 bg-white p-6 shadow-sm">
		<p class="text-emerald-700 text-xl font-semibold">Runes como keywords</p>
		<p class="mt-2 text-base text-slate-600">
			<code class="rounded bg-slate-100 px-1">$state</code>,
			<code class="rounded bg-slate-100 px-1">$derived</code>,
			<code class="rounded bg-slate-100 px-1">$effect</code>, No necesitan imports, paralelos a
			UseState y UseMemo, no hay paralelo a derived.
		</p>
	</Transition>

	<Transition order={3} class="rounded-xl border border-flisol-orange-500/20 bg-white p-6 shadow-sm">
		<p class="text-flisol-orange-400 text-xl font-semibold">Server-first</p>
		<p class="mt-2 text-base text-slate-600">
			Remote Functions eliminan la frontera API REST. Llamás funciones del servidor como si fueran
			locales.
		</p>
	</Transition>

	<Transition order={4} class="rounded-xl border border-flisol-blue-300/20 bg-white p-6 shadow-sm">
		<p class="text-flisol-blue-300 text-xl font-semibold">TypeScript de fábrica</p>
		<p class="mt-2 text-base text-slate-600">Tipos generados automáticamente, end-to-end.</p>
	</Transition>
</div>

<Transition class="mt-8 text-center">
	<p class="text-2xl text-slate-700">Mejor DX</p>
</Transition>
