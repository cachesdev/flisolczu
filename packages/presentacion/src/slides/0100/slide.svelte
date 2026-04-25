<script lang="ts">
	import { Transition } from '@animotion/core'
	import LogoHero from '$lib/assets/logo-hero.svg'
</script>

<div class="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-flisol-lime-400/15 blur-3xl"></div>
<div class="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-flisol-blue-300/10 blur-3xl"></div>
<div class="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-flisol-orange-400/10 blur-3xl"></div>

<div class="relative">
	<Transition>
		<img src={LogoHero} alt="FLISOL Caaguazu 2026" class="mx-auto w-full max-w-2xl" />
	</Transition>

	<Transition class="mt-8 text-center">
		<p class="text-3xl font-semibold text-slate-800">Parte 2</p>
		<p class="mt-2 text-5xl font-bold text-flisol-blue-600">Desarrollo del Sitio Web</p>
	</Transition>

	<Transition class="mt-10 flex justify-center gap-8 text-lg text-slate-700">
		<span>UTIC Caaguazu</span>
		<span>FLISOL 2026</span>
	</Transition>
</div>

<Transition class="mt-8 text-center">
	<p class="text-3xl font-semibold text-slate-800">Parte 2</p>
	<p class="mt-2 text-5xl font-bold text-flisol-blue-600">Desarrollo del Sitio Web</p>
</Transition>

<Transition class="mt-10 flex justify-center gap-8 text-lg text-slate-700">
	<span>UTIC Caaguazú</span>
	<span>FLISOL 2026</span>
</Transition>
