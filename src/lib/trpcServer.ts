import { httpBatchLink } from '@trpc/client'
import { createCallerFactory } from '@/server/trpc'
import { appRouter } from '@/server'

export const getBaseUrl = () => {
    // browser should use relative path
    if (typeof window === 'undefined') return ''
    // reference for vercel.com
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
    // assume localhost
    return `http://localhost:${process.env.PORT ?? 3000}`
}

const createCaller = createCallerFactory(appRouter)
const trpcServer = createCaller({
    links: [
        httpBatchLink({
            url: `${getBaseUrl()}/api/trpc`,
        }),
    ],
})

export default trpcServer
