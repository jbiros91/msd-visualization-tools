import { publicProcedure, createRouter } from '../trpc'
import service from '@/server/services'

export default createRouter({
    getData: publicProcedure.query(async () => {
        return await service.ukhsa.getData()
    })
})
