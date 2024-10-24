import createClient from 'openapi-fetch'
import type { paths, components } from './__generated__/schema'
import {
    Theme,
    SubTheme,
    RespiratoryTopic,
    GeographyType,
    NationGeographyType,
    Metric,
    PaginatedAPITimeSeriesListList,
    Pagination,
    PaginatedMetricFn
} from './types'

const MAX_PAGE_SIZE = 365



class UkhsaApi {
    client: ReturnType<typeof createClient<paths>>

    constructor() {
        this.client = createClient<paths>({
            baseUrl: 'https://api.ukhsa-dashboard.data.gov.uk/'
        })
    }

    #getCovid19Metric(metric: Metric, pagination?: Pagination)  {
        return this.client.GET('/v2/themes/{theme}/sub_themes/{sub_theme}/topics/{topic}/geography_types/{geography_type}/geographies/{geography}/metrics/{metric}', {
            params: {
                path: {
                    theme: Theme.INFECTION_DISEASE,
                    sub_theme: SubTheme.RESPIRATORY,
                    topic: RespiratoryTopic.COVID_19,
                    geography_type: GeographyType.NATION,
                    geography: NationGeographyType.ENGLAND,
                    metric: metric
                },
                query: {
                    page: pagination?.page,
                    page_size: pagination?.pageSize === undefined ? undefined : Math.min(pagination.pageSize, MAX_PAGE_SIZE)
                }
            },
        })
    }

    async #getAllCovid19Metric(fn: PaginatedMetricFn) {
        const data = await fn({ page: 1, pageSize: 365 })

        if (data === null)
            return []

        const results = data.results

        let page = 2
        let url  = data.next
        while (url !== null) {
            const nextData = await fn({page: page, pageSize: 365})

            if (nextData === null)
                break

            results.push(...nextData.results)

            url = nextData.next
            page++
        }

        return results
    }

    async getCovid19AdmissionByDay(pagination?: Pagination)  {
        const { data } = await this.#getCovid19Metric(Metric.COVID_19_HEALTHCARE_ADMISSION_BY_DAY, pagination)
        return data ?? null
    }

    async getCovid19DeathsByDay(pagination?: Pagination) {
        const { data } = await this.#getCovid19Metric(Metric.COVID_19_DEATHS_ONS_BY_DAY, pagination)
        return data ?? null
    }

    getAllCovid19AdmissionByDay() {
        return this.#getAllCovid19Metric(x => this.getCovid19AdmissionByDay(x))
    }

    getAllCovid19DeathsByDay() {
        return this.#getAllCovid19Metric(x =>  this.getCovid19DeathsByDay(x))
    }
}


export default new UkhsaApi()
