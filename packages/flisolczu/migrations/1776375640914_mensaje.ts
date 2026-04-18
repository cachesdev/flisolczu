import { type ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
	pgm.createTable(
		'mensaje',
		{
			id: { type: 'bigserial', primaryKey: true },
			texto: { type: 'text', notNull: true },
			visitante: { type: 'text', notNull: true },
			fecha: { type: 'timestamptz', notNull: true, default: pgm.func('now()') }
		},
		{ ifNotExists: true }
	);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
	pgm.dropTable('mensaje', { ifExists: true });
}
