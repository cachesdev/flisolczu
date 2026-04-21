import {
	pgEnum,
	pgTable,
	bigserial,
	serial,
	text,
	varchar,
	timestamp,
	boolean
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const tipoEstadoPago = pgEnum('tipo_estado_pago', ['abonado', 'devuelto', 'pendiente']);

export const listado = pgTable('listado', {
	id: bigserial({ mode: 'number' }).primaryKey(),
	cedula: text().notNull(),
	nombre: text().notNull(),
	apellido: text().notNull(),
	estadoPago: boolean('estado_pago').notNull(),
	metodoPago: text('metodo_pago').notNull(),
	duplicado: boolean().notNull(),
	createdAt: timestamp('created_at')
		.default(sql`now()`)
		.notNull()
});

export const mensaje = pgTable('mensaje', {
	id: bigserial({ mode: 'number' }).primaryKey(),
	texto: text().notNull(),
	visitante: text().notNull(),
	fecha: timestamp({ withTimezone: true })
		.default(sql`now()`)
		.notNull()
});

export const pgmigrations = pgTable('pgmigrations', {
	id: serial().primaryKey(),
	name: varchar({ length: 255 }).notNull(),
	runOn: timestamp('run_on').notNull()
});
