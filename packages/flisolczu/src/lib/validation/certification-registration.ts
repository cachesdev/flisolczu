import * as v from 'valibot';
import { MetodoPago } from '$lib/config/certification-form';

export const certificationRegistrationSchema = v.object({
	cedula: v.pipe(
		v.string(),
		v.trim(),
		v.minLength(3, 'Ingresá al menos 3 caracteres en la cédula.'),
		v.maxLength(20, 'La cédula no puede superar 20 caracteres.')
	),
	nombre: v.pipe(
		v.string(),
		v.trim(),
		v.minLength(2, 'Ingresá al menos 2 caracteres en el nombre.'),
		v.maxLength(80, 'El nombre no puede superar 80 caracteres.')
	),
	apellido: v.pipe(
		v.string(),
		v.trim(),
		v.minLength(2, 'Ingresá al menos 2 caracteres en el apellido.'),
		v.maxLength(80, 'El apellido no puede superar 80 caracteres.')
	),
	metodoPago: v.enum(MetodoPago, 'Seleccioná un método de pago válido.')
});

export type CertificationRegistrationInput = v.InferOutput<typeof certificationRegistrationSchema>;
