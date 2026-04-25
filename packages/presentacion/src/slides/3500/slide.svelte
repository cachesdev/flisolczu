<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-center text-4xl font-bold text-flisol-blue-600">Demo en vivo</h2>
	<p class="mt-4 text-center text-xl text-slate-600">Veamos el sitio funcionando en produccion</p>
</Transition>

<Transition class="mt-10 grid grid-cols-3 justify-center gap-4">
	<div class="border-flisol-blue-400/25 rounded-2xl border bg-white p-5 text-center shadow-sm">
		<p class="text-sm text-slate-700">Hero section</p>
		<p class="text-xs text-slate-400">Logo + info del evento</p>
	</div>
	<div class="border-flisol-orange-500/25 rounded-2xl border bg-white p-5 text-center shadow-sm">
		<p class="text-sm text-slate-700">Countdown</p>
		<p class="text-xs text-slate-400">Tiempo real reactivo</p>
	</div>
	<div class="border-emerald-200 rounded-2xl border bg-white p-5 text-center shadow-sm">
		<p class="text-sm text-slate-700">Formulario</p>
		<p class="text-xs text-slate-400">Validacion + GeoIP</p>
	</div>
</Transition>

<Transition class="mt-10 text-center">
	<p class="text-emerald-700 text-2xl">flisolczu.org</p>
	<p class="mt-2 text-sm text-slate-400">o el dominio de produccion del evento</p>
</Transition>
