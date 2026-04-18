import { type ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
	pgm.createType('tipo_estado_pago', ['abonado', 'devuelto', 'pendiente']);

	pgm.createTable(
		'listado',
		{
			id: { type: 'bigserial', primaryKey: true },
			nombre: { type: 'text', notNull: true },
			apellido: { type: 'text', notNull: true },
			estado_pago: { type: 'boolean', notNull: true },
			metodo_pago: { type: 'text', notNull: true }
		},
		{ ifNotExists: true }
	);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
	pgm.dropTable('listado', { ifExists: true });
	pgm.dropType('tipo_estado_pago', { ifExists: true });
}
