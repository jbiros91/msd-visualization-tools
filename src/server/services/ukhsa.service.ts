import ukhsaClient, { APITimeSeriesList } from '@/ukhsaClient'

type TimeEntry = {
    date: string
    value: number
}


export async function getCovid19MetricByDay(metric: 'admission' | 'deaths') {
    const metricFn = {
        'admission': ukhsaClient.getAllCovid19AdmissionByDay(),
        'deaths': ukhsaClient.getAllCovid19AdmissionByDay(),
    }

    const data = await metricFn[metric]

    // group by year and month
    const grouped = data.reduce((group, entry) => {
        const groupId = `${entry.year}-${entry.month}`
        group[groupId] ??= { date: '', value: 0 }
        group[groupId].value += entry.metric_value
        group[groupId].date = groupId
        return group
    }, {} as Record<string, TimeEntry>)

    return Object.values(grouped)
}

