'use client'
import { trpc } from "@/lib/trpc";
import {useRef} from "react";
import useChart from "@/app/useChart";

const UKHSATest = () => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const { chart, setReference } = useChart()

    const { data } = trpc.ukhsa.getData.useQuery()

    console.log(data)
    return (
        <div className="mt-80">
            <div ref={setReference}></div>
            {JSON.stringify(data)}

        </div>
    )
}

export default UKHSATest
