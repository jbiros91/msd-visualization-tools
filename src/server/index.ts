import { createRouter } from './trpc'
import router  from './routers'

export const appRouter = createRouter(router)
export type AppRouter = typeof appRouter
