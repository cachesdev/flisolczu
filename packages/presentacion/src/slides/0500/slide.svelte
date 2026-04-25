<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">El stack completo</h2>
</Transition>

<div class="mt-10 grid grid-cols-3 gap-6">
	<Transition order={1} class="rounded-2xl border border-flisol-blue-400/20 bg-white p-6 shadow-sm">
		<p class="text-flisol-blue-300 text-xs font-semibold tracking-wider uppercase">Frontend</p>
		<div class="mt-4 space-y-2 text-base text-slate-700">
			<p>SvelteKit</p>
			<p>Tailwind CSS 4</p>
			<p>BitsUI</p>
			<p>NumberFlow</p>
			<p>TextMorph</p>
			<p>AnimeJS</p>
			<p>Valibot</p>
		</div>
	</Transition>

	<Transition order={2} class="rounded-2xl border border-flisol-orange-500/20 bg-white p-6 shadow-sm">
		<p class="text-flisol-orange-400 text-xs font-semibold tracking-wider uppercase">Backend</p>
		<div class="mt-4 space-y-2 text-base text-slate-700">
			<p>node-pg-migrate</p>
			<p>Drizzle ORM v1 beta</p>
			<p>Remote Functions</p>
			<p>Valibot</p>
			<p>GeoIP filtering</p>
			<p>Rate Limiting</p>
		</div>
	</Transition>

	<Transition order={3} class="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
		<p class="text-flisol-blue-600 text-xs font-semibold tracking-wider uppercase">Infra</p>
		<div class="mt-4 space-y-2 text-base text-slate-700">
			<p>Railway</p>
			<p>Docker Compose</p>
			<p>PostgreSQL</p>
			<p>PNPM monorepo</p>
		</div>
	</Transition>
</div>

<Transition class="mt-10 flex items-center justify-center gap-6 text-sm text-slate-500">
	<span class="flex items-center gap-2"> Type Safety de punta a punta usando Typescript. </span>
</Transition>
