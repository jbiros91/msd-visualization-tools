'use client'
import { trpc } from "../lib/TrpcProvider";
import {useRef} from "react";
import useChart from "@/common/hooks/useChart";
import Chart from "@/app/Chart";

const UKHSATest = () => {
    const [data] = trpc.ukhsa.getCovid19MetricByDay.useSuspenseQuery('admission')

    return (
        <Chart data={data}/>
    )
}

export default UKHSATest
