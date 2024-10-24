import { Card, Avatar, Button, Skeleton, Spin } from 'antd'
import { CommentOutlined } from '@ant-design/icons'
import { Suspense } from 'react'
import FavoriteButton from './FavoriteButton/FavoriteButton'
import { ChartType } from './types'
import TimeEntryChart from '@/features/ChartCard/TimeEntryChart'

type Props = {
    title: string
    type: ChartType
}

const ChartCard = async ({ title, type }: Props) => {
    return (
        <Card
            title={title}
            actions={[
                <Avatar
                    key='avatar'
                    src='https://api.dicebear.com/7.x/miniavs/svg?seed=8'
                    size='small'
                />,
                <Suspense
                    key={type}
                    fallback={<Spin key={type} />}
                >
                    <FavoriteButton type={type} />
                </Suspense>,
                <Button
                    key={`${type}-comment`}
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
            <Suspense fallback={<Skeleton paragraph={{ rows: 6 }} />}>
                <TimeEntryChart type={type} />
            </Suspense>
        </Card>
    )
}

export default ChartCard
