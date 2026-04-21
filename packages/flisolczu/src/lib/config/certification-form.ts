export const MetodoPago = {
	FISICO: 'FISICO',
	DIGITAL: 'DIGITAL'
} as const;

export type MetodoPago = (typeof MetodoPago)[keyof typeof MetodoPago];

export const Abonado = {
	ABONADO: 'ABONADO',
	PENDIENTE: 'PENDIENTE'
} as const;

export type Abonado = (typeof Abonado)[keyof typeof Abonado];

export const METODO_PAGO_OPTIONS: Array<{ value: MetodoPago; label: string }> = [
	{ value: MetodoPago.FISICO, label: 'En físico' },
	{ value: MetodoPago.DIGITAL, label: 'Via digital' }
];
