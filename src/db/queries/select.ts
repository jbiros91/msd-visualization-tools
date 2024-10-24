import { eq } from 'drizzle-orm'
import { db } from '../db'
import { favoritesTable, type SelectFavorite } from '../schema'

export async function getFavoriteByChartId(chartId: SelectFavorite['chartId']) {
    return db
        .select()
        .from(favoritesTable)
        .where(eq(favoritesTable.chartId, chartId))
}
