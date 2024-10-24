import { createCallerFactory } from '@/server/trpc'
import { appRouter } from '@/server'

const createCaller = createCallerFactory(appRouter)
const trpcServer = createCaller({})

export default trpcServer
