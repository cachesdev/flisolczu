<script lang="ts">
	import { NotebookIcon, PresentationChartIcon } from 'phosphor-svelte';

	const iconByType = {
		stand: NotebookIcon,
		disertacion: PresentationChartIcon
	} as const;

	const schedule = [
		{
			start: 'A definir',
			end: 'Horario por confirmar',
			format: 'Stand',
			title: 'ALTERNATIVAS GRATUITAS A SOFTWARE POPULAR DE PAGO',
			details: 'Curso: 2do y 3ro UTIC',
			people: 'Responsables: Bruno Ruiz / Alan Araujo',
			type: 'stand'
		},
		{
			start: 'A definir',
			end: 'Horario por confirmar',
			format: 'Stand',
			title: 'SIMULADOR DE CONDUCCIÓN BASADO EN ARDUINO',
			details: 'Curso: EXA - UTIC',
			people: 'Responsable: Angel David Gonzalez',
			type: 'stand'
		},
		{
			start: 'A definir',
			end: 'Horario por confirmar',
			format: 'Stand',
			title: 'ALCOHOLÍMETRO BASADO EN ARDUINO',
			details: 'Curso: 2do - UTIC',
			people: 'Responsables: Eunice Portillo / Hernán Duré',
			type: 'stand'
		},
		{
			start: 'A definir',
			end: 'Horario por confirmar',
			format: 'Stand',
			title: 'PROBANDO S.O. OPEN SOURCE (LINUX, UBUNTU, FEDORA...)',
			details: 'Curso: 4to - UTIC',
			people: 'Responsable: Andres Britez',
			type: 'stand'
		},
		{
			start: 'A definir',
			end: 'Horario por confirmar',
			format: 'Stand',
			title: 'COMPETENCIA DE MECANOGRAFÍA',
			details: 'Curso: 4to - UTIC',
			people: 'Responsable: Oscar Stiven Gonzalez',
			type: 'stand'
		},
		{
			start: 'A definir',
			end: 'Horario por confirmar',
			format: 'Stand',
			title: 'JUEGO DE MISIL CON TRACKING CORPORAL',
			details: 'Curso: 4to - UTIC',
			people: 'Responsable: Elias Almiron',
			type: 'stand'
		},
		{
			start: 'A definir',
			end: 'Horario por confirmar',
			format: 'Stand',
			title: 'JUEGO BOXEO DE BOXEO CON TRACKING CORPORAL',
			details: 'Curso: 4to Campo 9',
			people: 'Responsable: Pablo Duarte',
			type: 'stand'
		},
		{
			start: 'A definir',
			end: 'Horario por confirmar',
			format: 'Disertación',
			title: 'GAMING EN LINUX',
			details: 'Curso: 4to - UTIC',
			people: 'Disertantes: Walter Aquino / Gustavo Dominguez',
			type: 'disertacion'
		},
		{
			start: 'A definir',
			end: 'Horario por confirmar',
			format: 'Disertación',
			title: 'PRIVACIDAD Y SEGURIDAD DIGITAL CON HERRAMIENTAS LIBRES',
			details: 'Modalidad: Disertante externo',
			people: 'Disertante: Ing. Richard Acosta Martínez',
			type: 'disertacion'
		},
		{
			start: 'A definir',
			end: 'Horario por confirmar',
			format: 'Disertación',
			title: 'BTS: DESARROLLANDO LAS APPS PARA LA FLISOL CZU 2026',
			details: 'Curso: 4to - UTIC',
			people: 'Disertantes: Gustavo Dominguez / Oscar Stiven Gonzales',
			type: 'disertacion'
		}
	] as const;
</script>

<section id="agenda" aria-labelledby="agenda-dia" class="space-y-5">
	<div class="flex flex-wrap items-end justify-between gap-3">
		<div>
			<p class="text-xs font-semibold tracking-[0.14em] text-flisol-blue-600 uppercase">
				Programa FLISOL 2026
			</p>
			<h2 class="text-2xl font-semibold text-flisol-blue-600 sm:text-3xl">
				Agenda preliminar del evento
			</h2>
		</div>
	</div>

	<ol class="space-y-3">
		{#each schedule as slot (`${slot.start}-${slot.title}`)}
			{@const Icon = iconByType[slot.type]}
			<li
				class="rounded-2xl border border-flisol-blue-300/22 bg-white/82 p-3 sm:rounded-[calc(var(--radius-card)+6px)] sm:border-flisol-blue-300/30 sm:bg-white sm:p-5 sm:shadow-sm"
			>
				<div class="grid gap-3 sm:gap-4 md:grid-cols-[7rem_1fr_auto] md:items-center">
					<div class="rounded-xl bg-flisol-blue-600/10 px-3 py-2 text-center md:text-left">
						<p class="text-base font-semibold text-flisol-blue-600">{slot.start}</p>
						<p class="text-xs text-slate-500">{slot.end}</p>
					</div>

					<div>
						<p
							class="text-[0.65rem] font-semibold tracking-[0.14em] text-flisol-orange-500 uppercase"
						>
							{slot.format}
						</p>
						<h3 class="text-[0.95rem] font-semibold text-slate-900 sm:text-lg">{slot.title}</h3>
						<p class="mt-1 text-sm leading-relaxed text-slate-600">{slot.details}</p>
						<p class="mt-2 text-xs font-medium tracking-wide text-slate-500 uppercase">
							{slot.people}
						</p>
					</div>

					<div
						class={`grid h-11 w-11 place-items-center rounded-xl ${
							slot.type === 'stand'
								? 'bg-flisol-orange-400/20 text-flisol-orange-500'
								: 'bg-flisol-blue-600/15 text-flisol-blue-600'
						}`}
					>
						<Icon size={22} weight="duotone" />
					</div>
				</div>
			</li>
		{/each}
	</ol>
</section>
