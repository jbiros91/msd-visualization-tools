import { db } from '../db'
import { favoritesTable, type InsertFavorite } from '../schema'

export function createFavorite(chartId: InsertFavorite['chartId']) {
    return db.insert(favoritesTable).values({ chartId: chartId })
}
