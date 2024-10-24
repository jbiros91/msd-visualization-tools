import {
    varchar,
    integer,
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,

} from 'drizzle-orm/pg-core';

export const favoritesTable = pgTable(
    'favorites',
    {
        id: serial().primaryKey(),
        chartId: varchar({ length: 256 }).unique().notNull(),
        createdAt: timestamp().defaultNow().notNull(),
    },
);

export type SelectFavorite = typeof favoritesTable.$inferSelect
export type InsertFavorite = typeof favoritesTable.$inferInsert
