import queries from '@/db/queries'

export async function getIsFavoriteByChartId(chartId: string) {
    const favoriteEntry = await queries.select.getFavoriteByChartId(chartId)
    return favoriteEntry.length === 1
}

export async function toggleFavoriteByChartId(chartId: string) {
    const isFavorite = await getIsFavoriteByChartId(chartId)

    if (isFavorite) {
        await queries.delete.deleteFavoriteByChartId(chartId)
        return false
    }

    await queries.insert.createFavorite(chartId)
    return true
}
