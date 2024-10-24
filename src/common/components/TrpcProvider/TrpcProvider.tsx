'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { httpBatchLink } from '@trpc/client'
import { useState, type PropsWithChildren } from 'react'
import trpc from '@/lib/trpc'

function getBaseUrl() {
    if (typeof window !== 'undefined') {
        // In the browser, we return a relative URL
        return ''
    }
    // When rendering on the server, we return an absolute URL

    // reference for vercel.com
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`
    }

    // assume localhost
    return `http://localhost:${process.env.PORT ?? 3000}`
}

const TrpcProvider = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient({}))
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
        }),
    )

    return (
        <trpc.Provider
            client={trpcClient}
            queryClient={queryClient}
        >
            <QueryClientProvider client={queryClient}>
                <ReactQueryStreamedHydration>
                    {children}
                </ReactQueryStreamedHydration>
            </QueryClientProvider>
        </trpc.Provider>
    )
}

export default TrpcProvider
