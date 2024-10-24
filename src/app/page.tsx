import { Button, Col, Row, Space } from 'antd'
import {
    DownloadOutlined,
    FilterOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons'
import Page, { PageHeader } from '@/common/components/Page'
import ChartCard, { MetricType } from '@/features/ChartCard'

export default async function Home() {
    return (
        <Page>
            <PageHeader>
                <h1 className='text-2xl font-bold'>COVID-19 in England</h1>

                <Space>
                    <Button
                        icon={<DownloadOutlined />}
                        iconPosition='end'
                    >
                        Export to PDF
                    </Button>
                    <Button
                        icon={<UnorderedListOutlined />}
                        iconPosition='end'
                    >
                        Notes (3)
                    </Button>
                    <Button
                        icon={<FilterOutlined />}
                        iconPosition='end'
                    >
                        <span className='text-xs pt-0.5 w-6 h-5 bg-blue-500 rounded-full text-white'>
                            9+
                        </span>
                        Filter
                    </Button>
                </Space>
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
