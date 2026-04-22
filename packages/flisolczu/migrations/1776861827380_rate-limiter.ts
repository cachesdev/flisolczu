import { type ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
	pgm.createTable(
		'rate_limiter_flexible',
		{
			key: { type: 'text', primaryKey: true },
			points: { type: 'integer', notNull: true },
			expire: { type: 'timestamp' }
		},
		{ ifNotExists: true }
	);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
	pgm.dropTable('rate_limiter_flexible', { ifExists: true });
}
