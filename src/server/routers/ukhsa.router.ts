import { z } from 'zod'
import { publicProcedure, createRouter } from '../trpc'
import service from '@/server/services'

export default createRouter({
    getCovid19MetricByDay: publicProcedure
        .input(z.union([z.literal('admission'), z.literal('deaths')]))
        .query(async (opts) => {
            const type = opts.input
            return await service.ukhsa.getCovid19MetricByDay(type)
        }),
})
