import { ChartType } from '../types'
import HearthButton from './HearthButton'
import trpcServer from '@/lib/trpcServer'

type Props = {
    type: ChartType
}

const FavoriteButton = async ({ type }: Props) => {
    const isFavorite = await trpcServer.favorites.getIsFavoriteByChatId(type)

    return (
        <HearthButton
            type={type}
            initialIsFavorite={isFavorite}
        />
    )
}

export default FavoriteButton
