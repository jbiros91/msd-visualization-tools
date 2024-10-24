import { Button } from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import React, { type MouseEventHandler } from 'react'
import { trpc } from '@/lib/TrpcProvider'

type Props = {
    chartId: string
}

const FavoriteButton = ({ chartId }: Props) => {
    const getIsFavoriteByChatId =
        trpc.favorites.getIsFavoriteByChatId.useQuery(chartId)

    const toggleFavorite = trpc.favorites.toggleFavorite.useMutation({
        onSettled: () => {
            void getIsFavoriteByChatId.refetch()
        },
    })

    const onClick: MouseEventHandler<HTMLButtonElement> = () => {
        toggleFavorite.mutate(chartId)
    }

    const icon = getIsFavoriteByChatId.data ? (
        <HeartFilled color='red' />
    ) : (
        <HeartOutlined />
    )

    return (
        <Button
            onClick={onClick}
            className='h-8'
            type='link'
            size='small'
            icon={icon}
            iconPosition='end'
        />
    )
}

export default FavoriteButton
