export const metodoPago = {
	FISICO: 'FISICO',
	DIGITAL: 'DIGITAL'
} as const;

export type MetodoPago = (typeof metodoPago)[keyof typeof metodoPago];

export const estadoPago = {
	ABONADO: 'ABONADO',
	PENDIENTE: 'PENDIENTE'
} as const;

export type EstadoPago = (typeof estadoPago)[keyof typeof estadoPago];

export const METODO_PAGO_OPTIONS: Array<{ value: MetodoPago; label: string }> = [
	{ value: metodoPago.FISICO, label: 'En fisico' },
	{ value: metodoPago.DIGITAL, label: 'Via digital' }
];
