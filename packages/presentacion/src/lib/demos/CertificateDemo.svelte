<script lang="ts">
	import TextMorph from '../../../node_modules/torph/dist/svelte/TextMorph.svelte';
	let nombre = $state('');
	let apellido = $state('');
	let submitted = $state(false);
	let pending = $state(false);

	const fullName = $derived(`${nombre || 'John'} ${apellido || 'Flisol'}`);

	const nombreError = $derived(
		nombre.length > 0 && nombre.trim().length < 2
			? 'Ingresá al menos 2 caracteres'
			: nombre.length > 80
				? 'El nombre no puede superar 80 caracteres'
				: ''
	);

	const apellidoError = $derived(
		apellido.length > 0 && apellido.trim().length < 2
			? 'Ingresá al menos 2 caracteres'
			: apellido.length > 80
				? 'El apellido no puede superar 80 caracteres'
				: ''
	);

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (nombreError || apellidoError || !nombre || !apellido) return;
		pending = true;
		await new Promise((r) => setTimeout(r, 1200));
		pending = false;
		submitted = true;
	}
</script>

<div class="grid gap-6 lg:grid-cols-[1fr_minmax(0,380px)] lg:gap-8">
	<div class="space-y-4">
		<h2 class="text-xl leading-tight font-semibold text-slate-700">Registro para certificados</h2>
		<p class="text-sm leading-relaxed text-slate-600">
			Completá tus datos para ver el preview. En producción, este formulario usa Remote Functions
			con validación Valibot, GeoIP y rate limiting.
		</p>

		<div class="pt-2">
			<div class="relative inline-block">
				<img
					src="/certificado.png"
					alt="FLISOL Caaguazú 2026"
					class="max-h-80 w-auto rounded-2xl border border-slate-200"
				/>
				<div
					class="pointer-events-none absolute top-1/2 left-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 px-2 text-center"
				>
					<p
						class="font-satisfy text-flisol-orange-500 truncate text-[clamp(0.9rem,2vw,1.6rem)] font-semibold tracking-[0.02em]"
					>
						<TextMorph text={fullName} />
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="rounded-2xl border border-slate-200 bg-white p-4">
		<form onsubmit={handleSubmit} class="flex h-full flex-col gap-4">
			<div class="grid gap-1.5">
				<label for="cert-nombre" class="text-sm font-medium text-slate-600">Nombre/s</label>
				<input
					id="cert-nombre"
					type="text"
					bind:value={nombre}
					placeholder="Ej: Ana"
					disabled={pending}
					class="h-11 rounded-xl border {nombreError
						? 'border-red-400'
						: 'border-slate-200'} bg-white px-3 text-sm text-slate-700 transition outline-none placeholder:text-slate-300 disabled:opacity-50"
				/>
				{#if nombreError}
					<p class="text-xs text-red-400">{nombreError}</p>
				{/if}
			</div>

			<div class="grid gap-1.5">
				<label for="cert-apellido" class="text-sm font-medium text-slate-600">Apellido/s</label>
				<input
					id="cert-apellido"
					type="text"
					bind:value={apellido}
					placeholder="Ej: Benítez"
					disabled={pending}
					class="h-11 rounded-xl border {apellidoError
						? 'border-red-400'
						: 'border-slate-200'} bg-white px-3 text-sm text-slate-700 transition outline-none placeholder:text-slate-300 disabled:opacity-50"
				/>
				{#if apellidoError}
					<p class="text-xs text-red-400">{apellidoError}</p>
				{/if}
			</div>
		</form>
	</div>
</div>
