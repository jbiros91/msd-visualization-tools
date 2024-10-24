import { PropsWithChildren } from "react";
import TrpcProvider from "@/lib/TrpcProvider";
import AntdRegistryProvider from "@/lib/AntdRegistryProvider";

/**
 * Place for all react's context providers.
 * (eg: Toast Provider, Custom Alert Provider ...)
 */
const Providers = ({ children }: PropsWithChildren) => (
    <TrpcProvider>
        <AntdRegistryProvider>
            {children}
        </AntdRegistryProvider>
    </TrpcProvider>
)

export default Providers