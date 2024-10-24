'use client'
import React, { type MouseEventHandler } from 'react'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { toast } from 'react-toastify'
import { ChartType } from '../types'
import { trpc } from '@/common/components/TrpcProvider'

type Props = {
    type: ChartType
    initialIsFavorite: boolean
}

export const getToastMsg = (isFavorite: boolean, type: ChartType) => {
    const msg = isFavorite ? 'was removed from favorite' : 'made favorite ❤️'
    const map = {
        [ChartType.COVID_19_ADMISSION_BY_DAY]: `Metric "Patients Admitted to Hospital" ${msg}`,
        [ChartType.COVID_19_DEATHS_BY_DAY]: `Metric "Deaths" ${msg}`,
    }

    return map[type]
}

const HearhButton = ({ type, initialIsFavorite }: Props) => {
    const { data: isFavorite, refetch } =
        trpc.favorites.getIsFavoriteByChatId.useQuery(type, {
            initialData: initialIsFavorite,
        })

    const toggleFavorite = trpc.favorites.toggleFavorite.useMutation({
        onSettled: () => {
            void refetch()
        },
    })

    const onClick: MouseEventHandler<HTMLButtonElement> = () => {
        toast(getToastMsg(isFavorite, type), {
            type: isFavorite ? 'warning' : 'success',
        })

        toggleFavorite.mutate(type)
    }

    const icon = isFavorite ? <HeartFilled color='red' /> : <HeartOutlined />

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

export default HearhButton
