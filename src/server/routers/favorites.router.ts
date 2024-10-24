import { z } from 'zod'
import { publicProcedure, createRouter } from '../trpc'
import service from '@/server/services'

export default createRouter({
    getIsFavoriteByChartId: publicProcedure
        .input(z.string())
        .query(async (opts) =>
            service.favorite.getIsFavoriteByChartId(opts.input),
        ),
    toggleFavorite: publicProcedure
        .input(z.string())
        .mutation(async (opts) =>
            service.favorite.toggleFavoriteByChartId(opts.input),
        ),
})
