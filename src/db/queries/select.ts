import { db } from '../db'
import { eq } from 'drizzle-orm';
import { favoritesTable, type SelectFavorite } from '../schema'

export async function getIsFavoriteByChartId(chartId: SelectFavorite['chartId']) {
    const result = await db
        .select()
        .from(favoritesTable)
        .where(eq(favoritesTable.chartId, chartId))

    return result.length === 1;
}
