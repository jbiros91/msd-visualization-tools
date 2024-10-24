import { Card, Avatar, Button, Skeleton, Spin, Result } from 'antd'
import { CommentOutlined } from '@ant-design/icons'
import { Suspense } from 'react'
import FavoriteButton from './FavoriteButton/FavoriteButton'
import { MetricType } from './types'
import TimeEntryChart from '@/features/ChartCard/TimeEntryChart'
import ErrorBoundary from '@/common/components/ErrorBoundary'
import type { ChartOptions } from '@/common/hooks/useChart'

type Props = {
    title: string
    metric: MetricType
} & Pick<ChartOptions, 'type'>

const ChartCard = async ({ title, metric, type }: Props) => {
    return (
        <Card
            title={title}
            actions={[
                <Avatar
                    key='avatar'
                    src='https://api.dicebear.com/7.x/miniavs/svg?seed=8'
                    size='small'
                />,
                <ErrorBoundary
                    fallback='-'
                    key={metric}
                >
                    <Suspense fallback={<Spin key={metric} />}>
                        <FavoriteButton type={metric} />
                    </Suspense>
                </ErrorBoundary>,
                <Button
                    key={`${metric}-comment`}
                    type='link'
                    size='small'
                    disabled
                    icon={
                        <CommentOutlined
                            className=''
                            key='comment'
                        />
                    }
                    iconPosition='end'
                >
                    0
                </Button>,
            ]}
        >
            <ErrorBoundary
                fallback={
                    <Result
                        status='error'
                        title='Server Error 😔'
                    />
                }
            >
                <Suspense fallback={<Skeleton paragraph={{ rows: 6 }} />}>
                    <TimeEntryChart
                        type={type}
                        metric={metric}
                    />
                </Suspense>
            </ErrorBoundary>
        </Card>
    )
}

export default ChartCard
