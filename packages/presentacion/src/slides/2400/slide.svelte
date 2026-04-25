<script lang="ts">
	import { Code, Transition } from '@animotion/core';

	let cedula = $state('');
	let nombreError = $state('');

	function validate() {
		if (cedula.trim().length < 3 && cedula.length > 0) {
			nombreError = 'Ingresá al menos 3 caracteres en la cédula.';
		} else if (cedula.length > 20) {
			nombreError = 'La cédula no puede superar 20 caracteres.';
		} else {
			nombreError = '';
		}
	}

	$effect(() => {
		validate();
	});
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Valibot. Mismo schema para el frontend y backend</h2>
</Transition>

<div class="mt-8 grid grid-cols-2 gap-6">
	<Transition>
		<div class="border-flisol-blue-400/25 rounded-2xl border bg-white p-5 text-[30px] shadow-sm">
			<p class="text-flisol-blue-300 mb-3 text-xs tracking-wider uppercase">
				validation/certification-registration.ts
			</p>
			<Code
				lang="ts"
				theme="vitesse-light"
				code={`import * as v from 'valibot'

export const certificationRegistrationSchema
  = v.object({
    cedula: v.pipe(
      v.string(), v.trim(),
      v.minLength(3, 'Mínimo 3 caracteres'),
      v.maxLength(20, 'Máximo 20 caracteres')
    ),
    nombre: v.pipe(
      v.string(), v.trim(),
      v.minLength(2),
      v.maxLength(80)
    ),
    apellido: v.pipe(
      v.string(), v.trim(),
      v.minLength(2),
      v.maxLength(80)
    ),
    metodoPago: v.enum(metodoPago),
  })

export type Input =
  v.InferOutput<typeof schema>`}
				options={{ duration: 500, stagger: 0.2, containerStyle: false }}
			/>
		</div>
	</Transition>

	<div class="space-y-4">
		<Transition>
			<div class="border-emerald-200 bg-white rounded-xl border p-5 shadow-sm">
				<!-- svelte-ignore a11y_label_has_associated_control -->
				<label class="mb-1 block text-sm text-slate-600">Cédula</label>
				<input
					type="text"
					bind:value={cedula}
					placeholder="Ej: 1234567"
class="w-full rounded-lg border {nombreError
					? 'border-red-400'
					: 'border-flisol-blue-400/40'} bg-white px-3 py-2 text-slate-800 transition outline-none placeholder:text-slate-300"
				/>
				{#if nombreError}
					<p class="mt-1 text-xs text-red-400">{nombreError}</p>
				{:else if cedula.length >= 3}
					<p class="text-emerald-600 mt-1 text-xs">Válido</p>
				{/if}
			</div>
		</Transition>

		<Transition>
			<div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<p class="text-sm font-semibold text-slate-700">¿Dónde se usa este schema?</p>
			<ul class="mt-2 space-y-1 text-xs text-slate-500">
				<li class="flex items-center gap-2">
					<span class="text-blue-600">A</span> Frontend:
					<code class="rounded bg-white px-1">form.preflight(schema)</code>
				</li>
				<li class="flex items-center gap-2">
					<span class="text-blue-600">B</span> Backend:
					<code class="rounded bg-white px-1">form(schema, handler)</code>
				</li>
			</ul>
			</div>
		</Transition>
	</div>
</div>
