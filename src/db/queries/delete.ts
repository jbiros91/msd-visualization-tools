import {favoritesTable, SelectFavorite} from "@/db/schema";
import { db } from '../db'
import {eq} from "drizzle-orm";

export async function deleteFavoriteByChartId(chartId: SelectFavorite['chartId']) {
    return db.delete(favoritesTable).where(eq(favoritesTable.chartId, chartId))
}