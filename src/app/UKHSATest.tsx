'use client'
import { trpc } from "@/lib/trpc";

const UKHSATest = () => {
    const data = trpc.ukhsa.getData.useQuery()

    return (
        <div className="mt-80">
            {JSON.stringify(data)}
        </div>
    )
}

export default UKHSATest
