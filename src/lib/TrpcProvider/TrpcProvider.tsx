'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { httpBatchLink } from '@trpc/client'
import { useState, PropsWithChildren } from 'react'
import trpc from './client'

const getBaseUrl = () => {
    // browser should use relative path
    if (typeof window === 'undefined')
        return ''

    // reference for vercel.com
    if (process.env.VERCE_URL)
        return `https://${process.env.VERCEL_URL}`;

    // assume localhost
    return `http://localhost:${process.env.PORT ?? 3000}`;
}

const TrpcProvider = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient({}))
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `${getBaseUrl()}/api/trpc`,
            })
        ]
    }))

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {/*<ReactQueryStreamedHydration>*/}
                    {children}
                {/*</ReactQueryStreamedHydration>*/}
            </QueryClientProvider>
        </trpc.Provider>
    )
}

export default TrpcProvider
