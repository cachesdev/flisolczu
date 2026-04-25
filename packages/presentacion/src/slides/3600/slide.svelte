<script lang="ts">
	import { Transition } from '@animotion/core';
	import LogoHero from '$lib/assets/logo-hero.svg';
</script>

<Transition>
	<img src={LogoHero} alt="FLISOL Caaguazú 2026" class="mx-auto w-full max-w-lg" />
</Transition>

<Transition class="mt-6 text-center">
	<p class="text-5xl font-bold text-slate-800">¿Preguntas?</p>
</Transition>

<div class="mt-8 grid grid-cols-1 gap-6">
	<Transition>
		<div class="border-flisol-orange-500/25 rounded-2xl border bg-white p-5 text-center shadow-sm">
			<p class="text-flisol-orange-400 mb-3 text-sm font-semibold">Repositorio</p>
			<div class="inline-block rounded-lg bg-white p-4">
				<p class="text-xs text-slate-400">github.com/cachesdev/flisolczu</p>
			</div>
			<p class="mt-4 text-sm text-slate-400">Todo el código es open source</p>
		</div>
	</Transition>
</div>

<Transition class="mt-8 text-center">
	<p class="mt-2 text-sm text-slate-400">
		FLISOL 2026 — Festival Latinoamericano de Instalación de Software Libre
	</p>
</Transition>
