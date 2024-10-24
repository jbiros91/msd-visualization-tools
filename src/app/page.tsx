import { Col, Row } from 'antd'
import Page, { PageHeader } from '@/common/components/Page'
import ChartCard, { MetricType } from '@/features/ChartCard'

export default async function Home() {
    return (
        <Page>
            <PageHeader>
                <h1 className='text-2xl font-bold'>COVID-19 in England</h1>
            </PageHeader>

            <Row gutter={[32, 32]}>
                <Col
                    xs={24}
                    xl={12}
                >
                    <ChartCard
                        title='Patients Admitted to Hospital'
                        metric={MetricType.COVID_19_ADMISSION_BY_DAY}
                        type='interval'
                    />
                </Col>

                <Col
                    xs={24}
                    xl={12}
                >
                    <ChartCard
                        title='Deaths'
                        metric={MetricType.COVID_19_DEATHS_BY_DAY}
                        type='line'
                    />
                </Col>
            </Row>
        </Page>
    )
}
