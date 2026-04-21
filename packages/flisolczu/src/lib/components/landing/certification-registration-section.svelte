<script lang="ts">
	import { onMount } from 'svelte';
	import { Label, Select } from 'bits-ui';
	import { METODO_PAGO_OPTIONS, type MetodoPago } from '$lib/config/certification-form';
	import { certificationRegistrationSchema } from '$lib/validation/certification-registration';
	import { submitCertificationRegistration } from '../../../routes/certification.remote';
	import { eventState } from '$lib/state/event.svelte';

	const form = submitCertificationRegistration.preflight(certificationRegistrationSchema);

	let metodoPago = $state<MetodoPago>(
		(form.fields.metodoPago.value() as MetodoPago | undefined) ?? METODO_PAGO_OPTIONS[0].value
	);

	const closed = $derived(eventState.registrationsClosed);
	const locked = $derived(closed || !!form.pending);
	const selected = $derived(METODO_PAGO_OPTIONS.find((o) => o.value === metodoPago) ?? null);

	onMount(() => {
		if (eventState.registrationsClosed) return;
		eventState.startTicking();
		return () => eventState.stopTicking();
	});
</script>

<section
	id="registro"
	class="rounded-3xl border border-flisol-blue-600/15 bg-flisol-blue-600 px-4 py-6 text-white sm:rounded-[calc(var(--radius-card)+10px)] sm:border-flisol-blue-600/20 sm:px-8 sm:py-8 sm:shadow-lg"
>
	<svelte:boundary>
		<div class="grid gap-6 lg:grid-cols-[1fr_minmax(0,460px)] lg:gap-8">
			<div class="space-y-4">
				<h2 class="text-2xl leading-tight font-semibold sm:text-3xl">Registro para certificados</h2>
				<p class="max-w-[54ch] text-sm leading-relaxed text-white/85 sm:text-base">
					Completá tus datos para solicitar tu certificado de participación en FLISOL 2026 Caaguazu.
					Una vez procesado, el equipo organizador te enviará la confirmación.
				</p>

				{#if eventState.registrationsDisabled}
					<p
						class="rounded-xl border border-flisol-orange-400/60 bg-flisol-orange-400/20 px-3 py-2 text-sm leading-relaxed text-white"
					>
						Las inscripciones están deshabilitadas por configuración del sistema.
					</p>
				{:else if eventState.hasStarted}
					<p
						class="rounded-xl border border-flisol-lime-400/60 bg-flisol-lime-400/20 px-3 py-2 text-sm leading-relaxed text-slate-900"
					>
						El período de registro finalizó porque el evento ya comenzó.
					</p>
				{/if}

				<div class="flex items-center justify-center pt-4">
					<img src="/logo-hero.svg" alt="FLISOL" class="h-24 w-auto opacity-90" />
				</div>
			</div>

			<div
				class="rounded-2xl border border-white/25 bg-white/95 p-4 text-slate-900 shadow-md sm:p-5"
			>
				<form {...form} class="grid gap-4" oninput={() => form.validate()}>
					<div class="grid gap-1.5">
						<Label.Root for="cert-cedula" class="text-sm font-medium text-slate-700">
							Cédula
						</Label.Root>
						<input
							id="cert-cedula"
							class="h-11 rounded-xl border border-flisol-blue-600/20 px-3 text-sm outline-hidden transition focus:border-flisol-blue-600 focus:ring-2 focus:ring-flisol-blue-300/30 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
							placeholder="Ej: 1234567"
							{...form.fields.cedula.as('text')}
							disabled={locked}
						/>
						{#each form.fields.cedula.issues() as issue, i (`${issue.message}-${i}`)}
							<p class="text-xs text-red-600">{issue.message}</p>
						{/each}
					</div>

					<div class="grid gap-1.5">
						<Label.Root for="cert-nombre" class="text-sm font-medium text-slate-700">
							Nombre
						</Label.Root>
						<input
							id="cert-nombre"
							class="h-11 rounded-xl border border-flisol-blue-600/20 px-3 text-sm outline-hidden transition focus:border-flisol-blue-600 focus:ring-2 focus:ring-flisol-blue-300/30 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
							placeholder="Ej: Ana"
							{...form.fields.nombre.as('text')}
							disabled={locked}
						/>
						{#each form.fields.nombre.issues() as issue, i (`${issue.message}-${i}`)}
							<p class="text-xs text-red-600">{issue.message}</p>
						{/each}
					</div>

					<div class="grid gap-1.5">
						<Label.Root for="cert-apellido" class="text-sm font-medium text-slate-700">
							Apellido
						</Label.Root>
						<input
							id="cert-apellido"
							class="h-11 rounded-xl border border-flisol-blue-600/20 px-3 text-sm outline-hidden transition focus:border-flisol-blue-600 focus:ring-2 focus:ring-flisol-blue-300/30 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
							placeholder="Ej: Benítez"
							{...form.fields.apellido.as('text')}
							disabled={locked}
						/>
						{#each form.fields.apellido.issues() as issue, i (`${issue.message}-${i}`)}
							<p class="text-xs text-red-600">{issue.message}</p>
						{/each}
					</div>

					<div class="grid gap-1.5">
						<Label.Root for="cert-metodo-pago" class="text-sm font-medium text-slate-700">
							Método de pago
						</Label.Root>
						<input {...form.fields.metodoPago.as('hidden', metodoPago)} />
						<Select.Root type="single" bind:value={metodoPago} disabled={locked}>
							<Select.Trigger
								id="cert-metodo-pago"
								class="flex h-11 w-full items-center justify-between rounded-xl border border-flisol-blue-600/20 px-3 text-left text-sm transition focus-visible:border-flisol-blue-600 focus-visible:ring-2 focus-visible:ring-flisol-blue-300/30 data-disabled:cursor-not-allowed data-disabled:bg-slate-100 data-disabled:text-slate-500 data-placeholder:text-slate-500"
							>
								{selected?.label ?? 'Seleccioná un método de pago'}
							</Select.Trigger>
							<Select.Portal>
								<Select.Content
									sideOffset={8}
									class="z-50 w-(--bits-select-anchor-width) rounded-xl border border-flisol-blue-600/15 bg-white p-1 shadow-lg"
								>
									<Select.Viewport>
										{#each METODO_PAGO_OPTIONS as option (option.value)}
											<Select.Item
												value={option.value}
												class="rounded-lg px-3 py-2 text-sm outline-hidden transition data-highlighted:bg-flisol-blue-300/10"
											>
												{#snippet children({ selected })}
													<div class="flex items-center justify-between gap-3">
														<span>{option.label}</span>
														{#if selected}
															<span class="text-xs font-semibold text-flisol-blue-600">
																Seleccionado
															</span>
														{/if}
													</div>
												{/snippet}
											</Select.Item>
										{/each}
									</Select.Viewport>
								</Select.Content>
							</Select.Portal>
						</Select.Root>
						{#each form.fields.metodoPago.issues() as issue, i (`${issue.message}-${i}`)}
							<p class="text-xs text-red-600">{issue.message}</p>
						{/each}
					</div>

					{#if form.result?.success}
						<p
							class="rounded-xl border border-flisol-lime-400/60 bg-flisol-lime-400/25 px-3 py-2 text-sm text-slate-900"
						>
							{form.result.message}
						</p>
					{/if}

					<button
						type="submit"
						class="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-flisol-orange-500 px-6 text-sm font-semibold text-white transition hover:bg-flisol-orange-400 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
						disabled={locked}
					>
						{#if form.pending}
							Enviando...
						{:else if closed}
							Inscripción cerrada
						{:else}
							Registrar solicitud
						{/if}
					</button>
				</form>
			</div>
		</div>

		{#snippet failed(error, reset)}
			<div class="rounded-2xl border border-red-400/60 bg-red-400/20 p-4 text-white">
				<p class="font-semibold">Error al cargar el formulario</p>
				{#if error && typeof error === 'object' && 'message' in error}
					<p class="mt-1 text-xs opacity-75">{String(error.message)}</p>
				{/if}
				<button
					onclick={reset}
					class="mt-2 rounded-lg bg-white/20 px-4 py-2 text-sm hover:bg-white/30"
				>
					Reintentar
				</button>
			</div>
		{/snippet}
	</svelte:boundary>
</section>
