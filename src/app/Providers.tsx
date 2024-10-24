import type { PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TrpcProvider from '@/common/components/TrpcProvider'
import AntdRegistryProvider from '@/common/components/AntdRegistryProvider'

/**
 * Place for all react's context providers.
 * (eg: Toast Provider, Toast, Custom Alert Provider ...)
 */
const Providers = ({ children }: PropsWithChildren) => (
    <TrpcProvider>
        <AntdRegistryProvider>{children}</AntdRegistryProvider>
        <ToastContainer />
    </TrpcProvider>
)

export default Providers
