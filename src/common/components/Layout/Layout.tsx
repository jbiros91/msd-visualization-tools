'use client'
import type { PropsWithChildren } from 'react'
import { Layout as AntdLayout } from 'antd'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <AntdLayout className='flex flex-col min-h-screen'>
            <AntdLayout.Header className='text-white sticky top-0 z-40'>
                MSD Visualization Tools
            </AntdLayout.Header>

            <AntdLayout.Content className='relative grow'>
                {children}
            </AntdLayout.Content>
            <AntdLayout.Footer className='flex justify-center'>
                © {new Date().getFullYear()} Jozef Bíroš
            </AntdLayout.Footer>
        </AntdLayout>
    )
}

export default Layout
