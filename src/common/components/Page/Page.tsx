import { PropsWithChildren } from "react";

const Page= ({children}: PropsWithChildren) => {
    return (
        <div className="p-10">
            {children}
        </div>
    )
}

export default Page