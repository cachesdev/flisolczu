<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">¿Por qué Svelte es superior aquí?</h2>
</Transition>

<div class="mt-10 max-w-[800px] space-y-6">
	<Transition order={1} class="border-emerald-200 rounded-2xl border bg-white p-6 shadow-sm">
		<p class="text-emerald-700 text-xl font-semibold">
			await se mezcla con cualquier variable reactiva
		</p>
		<p class="mt-2 text-base text-slate-600">
			En Next.js, Server Components son componentes enteros async — no podés hacer <code
				class="rounded bg-white px-1">await</code
			>
			en un componente cliente. En Svelte, el <code class="rounded bg-white px-1">await</code>
			vive en <code class="rounded bg-white px-1">$derived</code>, en markup, en el
			<code class="rounded bg-white px-1">&lt;script&gt;</code>. No hay separación artificial
			entre "server component" y "client component".
		</p>
	</Transition>

	<Transition order={2} class="border-flisol-blue-400/20 rounded-2xl border bg-white p-6 shadow-sm">
		<p class="text-flisol-blue-300 text-xl font-semibold">Synchronized updates</p>
		<p class="mt-2 text-base text-slate-600">
			La UI espera al async sin mostrar estados intermedios inconsistentes. En React, necesitás <code
				class="rounded bg-white px-1">&lt;Suspense&gt;</code
			>
			y skeletons manuales. En Svelte, es automático — si
			<code class="rounded bg-white px-1">count</code>
			cambia mientras <code class="rounded bg-white px-1">await add(count)</code> está pendiente, la
			UI se actualiza sola cuando todo resuelve.
		</p>
	</Transition>

	<Transition order={3} class="border-flisol-orange-500/20 rounded-2xl border bg-white p-6 shadow-sm">
		<p class="text-flisol-orange-400 text-xl font-semibold">Una sola sintaxis para todo</p>
		<p class="mt-2 text-base text-slate-600">
			<code class="rounded bg-white px-1">await</code> funciona igual en server y client. En Next.js,
			hacer fetch en un client component no ejecuta en el servidor — necesitás SWR o React Query. En Svelte,
			las remote functions son el fetch, sin bibliotecas extra.
		</p>
	</Transition>

	<Transition order={4} class="border-flisol-blue-400/20 rounded-2xl border bg-white p-6 shadow-sm">
		<p class="text-flisol-blue-300 text-xl font-semibold">SSR asíncrono nativo</p>
		<p class="mt-2 text-base text-slate-600">
			<code class="rounded bg-white px-1">await render(App)</code> — sin streaming manual, sin
			<code class="rounded bg-white px-1">renderToPipeableStream</code>. SvelteKit maneja todo
			internamente.
		</p>
	</Transition>
</div>
