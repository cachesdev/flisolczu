import { invalid } from '@sveltejs/kit';
import { form } from '$app/server';
import { db } from '$lib/server/db';
import { listado } from '$lib/server/db/schema';
import { Abonado } from '$lib/config/certification-form';
import {
	certificationRegistrationSchema,
	type CertificationRegistrationInput
} from '$lib/validation/certification-registration';
import { eventState } from '$lib/state/event.svelte';

export const submitCertificationRegistration = form(
	certificationRegistrationSchema,
	async ({ cedula, nombre, apellido, metodoPago }: CertificationRegistrationInput) => {
		if (eventState.registrationsClosed) {
			invalid('El registro de certificados está cerrado en este momento.');
		}

		await db.insert(listado).values({
			cedula,
			nombre,
			apellido,
			estadoPago: false,
			metodoPago,
			duplicado: false
		});

		return {
			success: true,
			message: 'Tu solicitud de certificado fue registrada correctamente.'
		};
	}
);
