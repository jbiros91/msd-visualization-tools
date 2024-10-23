import ukhsaClient, { Enum } from '@/ukhsaClient'

function fetchMetric(page: number = 1) {
    return ukhsaClient.GET('/v2/themes/{theme}/sub_themes/{sub_theme}/topics/{topic}/geography_types/{geography_type}/geographies/{geography}/metrics/{metric}', {
        params: {
            path: {
                theme: Enum.Theme.INFECTION_DISEASE,
                sub_theme: Enum.SubTheme.RESPIRATORY,
                topic: Enum.RespiratoryTopic.COVID_19,
                geography_type: Enum.GeographyType.NATION,
                geography: Enum.NationGeographyType.ENGLAND,
                metric: Enum.Metric.COVID_19_DEATHS_ONS_BY_DAY
            },
            query: {
                page,
                // max page size which API allows
                page_size: 365,
            }
        },
    })
}


export async function getData() {
    const fetchResponse= await fetchMetric(1)
    if (fetchResponse.data === undefined)
        return []

    const data = fetchResponse.data.results

    let page = 2
    let url  = fetchResponse.data.next
    while (url !== null) {
        const nextFetchResponse = await fetchMetric(page)
        if (nextFetchResponse.data === undefined)
            break

        url = nextFetchResponse.data.next
        data.push(...nextFetchResponse.data.results)
        page++
    }

    return data
}