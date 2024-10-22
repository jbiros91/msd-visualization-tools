import createClient from 'openapi-fetch'
import * as Enum from './enums'
import type { paths } from './__generated__/schema'


export default createClient<paths>({
    baseUrl: 'https://api.ukhsa-dashboard.data.gov.uk/'
})
export { Enum }
