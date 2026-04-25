<script lang="ts">
	import { Code, Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">node-pg-migrate + Drizzle ORM</h2>
	<p class="mt-2 text-lg text-slate-600">Separación de concerns: migraciones vs type safety</p>
</Transition>

<div class="mt-8 grid grid-cols-2 gap-6">
	<Transition>
		<div class="border-flisol-orange-500/25 rounded-2xl border bg-white p-5">
			<p class="text-flisol-orange-400 mb-3 text-xs tracking-wider uppercase">node-pg-migrate</p>
			<p class="mb-3 text-base text-slate-700">Migraciones tradicionales up/down</p>
			<Code
				lang="bash"
				theme="vitesse-light"
				code={`# Crear migración:
pnpm db:migrate:create add-cert-table

# Ejecutar:
pnpm db:migrate:up

# Rollback:
pnpm db:migrate:down`}
				options={{ duration: 400, stagger: 0.2, containerStyle: false }}
				class="text-sm"
			/>
		</div>
	</Transition>

	<Transition>
		<div class="border-flisol-blue-400/25 rounded-2xl border bg-white p-5">
			<p class="text-flisol-blue-300 mb-3 text-xs tracking-wider uppercase">Drizzle ORM</p>
			<p class="mb-3 text-base text-slate-700">Type-safe schema desde la DB</p>
			<Code
				lang="bash"
				theme="vitesse-light"
				code={`# Pull del schema real:
pnpm db:pull

# Genera tipos TypeScript:
# schema.ts con definiciones
# tipadas de tablas y columnas`}
				options={{ duration: 400, stagger: 0.2, containerStyle: false }}
				class="text-sm"
			/>
		</div>
	</Transition>
</div>
