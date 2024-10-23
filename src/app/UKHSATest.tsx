'use client'
import { trpc } from "@/lib/trpc";
import {useRef} from "react";
import useChart from "@/common/hooks/useChart";
import Chart from "@/app/Chart";

const UKHSATest = () => {
    const { data } = trpc.ukhsa.getData.useQuery()
    if (data == null)
        return

    const groupByMonthAndYear = data.reduce((group, x) => {
        const groupId =  `${x.year}-${x.month}`
        group[groupId] ??= { date: '', value: 0 }
        group[groupId].value += x.metric_value
        group[groupId].date = groupId

        return group
    }, {} as Record<string, {date: string, value: number}>)


    return (
        <div className="mt-80">
            <Chart data={Object.values(groupByMonthAndYear)}/>
        </div>
    )
}

export default UKHSATest
