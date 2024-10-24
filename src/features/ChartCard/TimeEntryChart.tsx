import { Chart } from '@/common/components/Chart'
import serverClient from '@/common/components/TrpcProvider/serverClient'
import { ChartType } from '@/features/ChartCard/types'

const metricType = {
    [ChartType.COVID_19_ADMISSION_BY_DAY]: 'admission',
    [ChartType.COVID_19_DEATHS_BY_DAY]: 'deaths',
} as const

type Props = {
    type: ChartType
}

const TimeEntryChart = async ({ type }: Props) => {
    const entries = await serverClient.ukhsa.getCovid19MetricByDay(
        metricType[type],
    )
    return (
        <Chart
            data={entries}
            xAxis='date'
            yAxis='value'
            key='date'
        />
    )
}

export default TimeEntryChart
