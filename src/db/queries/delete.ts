import { eq } from 'drizzle-orm'
import { db } from '../db'
import { favoritesTable, SelectFavorite } from '@/db/schema'

export async function deleteFavoriteByChartId(
    chartId: SelectFavorite['chartId'],
) {
    return db.delete(favoritesTable).where(eq(favoritesTable.chartId, chartId))
}
