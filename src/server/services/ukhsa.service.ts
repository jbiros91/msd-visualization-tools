import ukhsaClient, { Enum } from '@/ukhsaClient'

export async function getData() {
    const { data } = await ukhsaClient.GET('/v2/themes/{theme}/sub_themes/{sub_theme}/topics/{topic}/geography_types/{geography_type}/geographies/{geography}/metrics/{metric}', {
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
                page_size: 50,
            }
        },

    })

    return data
}