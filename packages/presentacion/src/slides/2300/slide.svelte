<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Type drift eliminado</h2>
	<p class="mt-2 text-lg text-slate-600">Tres capas hablando el mismo idioma</p>
</Transition>

<div class="mt-10 flex flex-col items-center gap-4">
	<Transition
		order={1}
		class="border-flisol-blue-400/30 w-full max-w-xl rounded-2xl border bg-white px-8 py-5 text-center"
	>
		<p class="text-flisol-blue-300 mb-1 text-xs tracking-wider uppercase">Capa 1 — Base de datos</p>
		<p class="text-2xl font-bold text-slate-800">PostgreSQL</p>
		<p class="text-sm text-slate-500">Migraciones con node-pg-migrate</p>
	</Transition>

	<Transition order={2} class="text-emerald-600 py-2 text-center text-2xl">
		↓ Drizzle db:pull genera tipos ↓
	</Transition>

	<Transition
		order={3}
		class="border-flisol-orange-500/30 w-full max-w-xl rounded-2xl border bg-white px-8 py-5 text-center"
	>
		<p class="text-flisol-orange-400 mb-1 text-xs tracking-wider uppercase">
			Capa 2 — TypeScript types
		</p>
		<p class="text-2xl font-bold text-slate-800">Drizzle Schema + Valibot</p>
		<p class="text-sm text-slate-500">
			<code class="rounded bg-white px-1">certificationRegistrationSchema</code>
		</p>
	</Transition>

	<Transition order={4} class="text-emerald-600 py-2 text-center text-2xl">
		↓ Mismo schema se importa en ↓
	</Transition>

	<div class="grid w-full max-w-2xl grid-cols-2 gap-6">
		<Transition
			order={5}
			class="border-flisol-blue-400/25 rounded-2xl border bg-white px-6 py-4 text-center"
		>
			<p class="text-flisol-blue-300 text-xs tracking-wider uppercase">Frontend</p>
			<p class="mt-1 text-lg font-semibold text-slate-800">form.preflight(schema)</p>
			<p class="text-xs text-slate-400">Validación client-side</p>
		</Transition>
		<Transition
			order={6}
			class="border-flisol-orange-500/25 rounded-2xl border bg-white px-6 py-4 text-center"
		>
			<p class="text-flisol-orange-400 text-xs tracking-wider uppercase">Backend</p>
			<p class="mt-1 text-lg font-semibold text-slate-800">form(schema, handler)</p>
			<p class="text-xs text-slate-400">Validación server-side</p>
		</Transition>
	</div>

	<Transition order={7} class="mt-4 text-center">
		<p class="text-emerald-600 text-xl">
			DB ↔ Server ↔ Cliente — todo sincronizado. <span class="text-slate-500"
				>Cero bugs de type mismatch.</span
			>
		</p>
	</Transition>
</div>
