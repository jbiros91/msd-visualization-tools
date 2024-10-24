import { unstable_noStore as noStore } from 'next/cache'
import { MetricType } from '../types'
import HearthButton from './HearthButton'
import trpcServer from '@/lib/trpcServer'

type Props = {
    type: MetricType
}

const FavoriteButton = async ({ type }: Props) => {
    // we always want correct state on full page refresh,
    noStore()
    const isFavorite = await trpcServer.favorites.getIsFavoriteByChartId(type)

    return (
        <HearthButton
            type={type}
            initialIsFavorite={isFavorite}
        />
    )
}

export default FavoriteButton
