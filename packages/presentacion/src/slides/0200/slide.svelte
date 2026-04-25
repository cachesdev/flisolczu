<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">¿Qué construimos?</h2>
</Transition>

<div class="mt-10 space-y-6">
	<Transition class="flex items-start gap-4">
		<div>
			<p class="flex gap-2 text-2xl font-semibold text-flisol-blue-600">
				<span
					class="bg-flisol-blue-400 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
					>1</span
				>
				Landing page del evento
			</p>
			<p class="text-lg text-slate-600">
				Información, agenda, countdown en tiempo real, patrocinadores
			</p>
		</div>
	</Transition>

	<Transition class="flex items-start gap-4">
		<div>
			<p class="flex gap-2 text-2xl font-semibold text-flisol-blue-600">
				<span
					class="bg-flisol-orange-500 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
					>2</span
				>
				Formulario de certificados
			</p>
			<p class="text-lg text-slate-600">
				Validación en tiempo real, geolocalización, protección anti-spam
			</p>
		</div>
	</Transition>

	<Transition class="flex items-start gap-4">
		<div>
			<p class="flex gap-2 text-2xl font-semibold text-flisol-blue-600">
				<span
					class="bg-emerald-500 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
					>3</span
				>
				Stack moderno
			</p>
			<p class="text-lg text-slate-600">Construido en ~10-15 horas entre clases y tiempo libre</p>
		</div>
	</Transition>
</div>
