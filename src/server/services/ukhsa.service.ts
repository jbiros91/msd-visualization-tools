export async function getData() {
    const url = new URL('https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_PCRcountByDay')
    url.searchParams.set("page_size", "")
    url.searchParams.set("page", "")

    const response = await fetch(url)

    return (await response.json()) as unknown
}