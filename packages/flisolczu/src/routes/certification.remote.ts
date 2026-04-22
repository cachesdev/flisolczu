import { invalid } from '@sveltejs/kit';
import { form, getRequestEvent } from '$app/server';
import { db } from '$lib/server/db';
import { listado } from '$lib/server/db/schema';
import { certificationRegistrationSchema } from '$lib/validation/certification-registration';
import { eventState } from '$lib/state/event.svelte';
import {
	getCountryFromIP,
	isFromParaguay,
	isDevIP,
	getRealClientIP
} from '$lib/server/geolocation';
import { checkRateLimit } from '$lib/server/rate-limiter';
import type { EstadoPago } from '$lib/config/certification-form';

export const submitCertificationRegistration = form(
	certificationRegistrationSchema,
	async ({ cedula, nombre, apellido, metodoPago }) => {
		if (eventState.registrationsClosed) {
			invalid('El registro de certificados está cerrado en este momento.');
		}

		const event = getRequestEvent();
		const ip = getRealClientIP(event);
		const isDev = isDevIP(ip);

		// Skipeamos geolock y ratelimit si la IP es desarrollo
		if (!isDev) {
			const countryCode = await getCountryFromIP(event);

			if (!isFromParaguay(countryCode)) {
				invalid(
					'Las inscripciones solo están disponibles para participantes desde Paraguay. Si estás en Paraguay y ves este mensaje, por favor contacta al equipo organizador via instagram or Github (ver footer).'
				);
			}

			try {
				await checkRateLimit(ip);
			} catch {
				invalid(
					'Has alcanzado el límite de intentos. Por favor, esperá 15 minutos antes de intentar nuevamente.'
				);
			}
		}

		let result;
		try {
			result = await db
				.insert(listado)
				.values({
					cedula,
					nombre,
					apellido,
					estadoPago: 'PENDIENTE' as EstadoPago,
					metodoPago,
					duplicado: false
				})
				.onConflictDoUpdate({
					target: listado.cedula,
					set: {
						nombre,
						apellido,
						metodoPago
					}
				})
				.returning({ isNew: listado.createdAt });
		} catch (e) {
			console.log(e);
		}

		const isUpdate = result![0] && Date.now() - result![0].isNew.getTime() > 1000;

		return {
			success: true,
			message: isUpdate
				? 'Ya estabas registrado. Actualizamos tu información con los nuevos datos.'
				: 'Tu solicitud de certificado fue registrada correctamente.'
		};
	}
);
