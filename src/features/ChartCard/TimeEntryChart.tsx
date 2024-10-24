import { Chart } from '@/common/components/Chart'
import trpcServer from '@/lib/trpcServer'
import { MetricType } from '@/features/ChartCard/types'
import type { ChartOptions } from '@/common/hooks/useChart'

const metricType = {
    [MetricType.COVID_19_ADMISSION_BY_DAY]: 'admission',
    [MetricType.COVID_19_DEATHS_BY_DAY]: 'deaths',
} as const

type Props = {
    metric: MetricType
} & Pick<ChartOptions, 'type'>

const TimeEntryChart = async ({ metric, type }: Props) => {
    const entries = await trpcServer.ukhsa.getCovid19MetricByDay(
        metricType[metric],
    )
    return (
        <Chart
            data={entries}
            type={type}
            xAxis='date'
            yAxis='value'
            key='date'
        />
    )
}

export default TimeEntryChart
