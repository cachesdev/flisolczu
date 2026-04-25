<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Lecciones aprendidas</h2>
</Transition>

<div class="mt-10 space-y-4">
	<Transition>
		<div class="border-emerald-200 bg-white rounded-xl border p-5 shadow-sm">
			<p class="text-emerald-700 text-lg font-semibold">\n\t\t\t\tSvelteKit redujo el boilerplate drasticamente
			</p>
			<p class="mt-1 text-base text-slate-600">
				vs Laravel y Next.js. Remote Functions eliminaron la necesidad de endpoints REST manuales.
			</p>
		</div>
	</Transition>

	<Transition>
		<div class="border-flisol-blue-400/20 rounded-xl border bg-white p-5 shadow-sm">
			<p class="text-flisol-blue-300 text-lg font-semibold">
				Valibot schema compartido evito bugs de validacion
			</p>
			<p class="mt-1 text-base text-slate-600">Una sola fuente de verdad para frontend y backend.</p>
		</div>
	</Transition>

	<Transition>
		<div class="border-flisol-orange-500/20 rounded-xl border bg-white p-5 shadow-sm">
			<p class="text-flisol-orange-400 text-lg font-semibold">
				Drizzle v1 beta funciona bien, pero no es perfecto
			</p>
			<p class="mt-1 text-base text-slate-600">
				db:pull no soporta todo (usamos ts-morph preprocessing). Requiere scripts extra.
			</p>
		</div>
	</Transition>

	<Transition>
		<div class="border-flisol-blue-400/20 rounded-xl border bg-white p-5 shadow-sm">
			<p class="text-flisol-blue-400 text-lg font-semibold">10-15 horas de desarrollo total</p>
			<p class="mt-1 text-base text-slate-600">
				Con un solo dev, entre clases y tiempo libre. El stack correcto hace la diferencia.
			</p>
		</div>
	</Transition>

	<Transition>
		<div class="border-flisol-orange-500/20 rounded-xl border bg-white p-5 shadow-sm">
			<p class="text-flisol-orange-500 text-lg font-semibold">
				El tiempo mas perdido: bugs de tipos de NumberFlow
			</p>
			<p class="mt-1 text-base text-slate-600">
				No en logica de negocio. El wrapper number-flow.svelte es un workaround temporal.
			</p>
		</div>
	</Transition>
</div>
