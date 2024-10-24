import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import type { PropsWithChildren } from 'react'
import Providers from '@/app/Providers'
import Layout from '@/common/components/Layout'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'MSD Visualization Tools',
    description: 'Playint with tRPC, Drizzle and others',
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    )
}
