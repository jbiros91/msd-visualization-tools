import { eq } from 'drizzle-orm'
import { db } from '../db'
import { favoritesTable, type SelectFavorite } from '@/db/schema'

export async function deleteFavoriteByChartId(
    chartId: SelectFavorite['chartId'],
) {
    await db.delete(favoritesTable).where(eq(favoritesTable.chartId, chartId))
    return true
}
