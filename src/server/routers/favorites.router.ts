import { publicProcedure, createRouter } from '../trpc'
import queries from '@/db/queries'
import { z } from 'zod'

export default createRouter({
    getIsFavoriteByChatId: publicProcedure
        .input(z.string())
        .query(
            async (opts) =>
                queries.select.getIsFavoriteByChartId(opts.input)
        ),
    toggleFavorite: publicProcedure
        .input(z.string())
        .mutation(
            async (opts) => {
                const chartId = opts.input
                const isFavorite = await queries.select.getIsFavoriteByChartId(chartId)

                const toggleFavorite = isFavorite
                    ? queries.delete.deleteFavoriteByChartId
                    : queries.insert.createFavorite

                return toggleFavorite(chartId)
            }
        ),
})
