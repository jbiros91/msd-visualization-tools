import serverClient from '@/common/components/TrpcProvider/serverClient'
import { Chart } from '@/common/components/Chart'

const UKHSATest = async () => {
    // const { data } = trpc.ukhsa.getCovid19MetricByDay.useQuery('admission')
    const data = await serverClient.ukhsa.getCovid19MetricByDay('admission')

    return (
        <Chart
            data={data}
            xAxis='date'
            yAxis='value'
            key='date'
        />
    )
}

export default UKHSATest
