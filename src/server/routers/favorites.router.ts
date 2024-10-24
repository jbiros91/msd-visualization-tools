import { z } from 'zod'
import { publicProcedure, createRouter } from '../trpc'
import queries from '@/db/queries'

export default createRouter({
    getIsFavoriteByChatId: publicProcedure
        .input(z.string())
        .query(async (opts) =>
            queries.select.getIsFavoriteByChartId(opts.input),
        ),
    toggleFavorite: publicProcedure.input(z.string()).mutation(async (opts) => {
        const chartId = opts.input
        const isFavorite = await queries.select.getIsFavoriteByChartId(chartId)

        if (isFavorite) {
            await queries.delete.deleteFavoriteByChartId(chartId)
            return false
        }

        await queries.insert.createFavorite(chartId)
        return true
    }),
})
