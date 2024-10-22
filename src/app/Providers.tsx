import { PropsWithChildren } from "react";
import TrpcProvider from "@/lib/trpc";

/**
 * Place for all react's context providers.
 * (eg: Toast Provider, Custom Alert Provider ...)
 */
const Providers = ({ children }: PropsWithChildren) => (
    <TrpcProvider>
        <div>
            {children}
        </div>
    </TrpcProvider>
)

export default Providers