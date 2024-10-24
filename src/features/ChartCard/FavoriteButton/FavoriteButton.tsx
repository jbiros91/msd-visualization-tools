import { ChartType } from '../types'
import HearthButton from './HearthButton'
import serverClient from '@/common/components/TrpcProvider/serverClient'

type Props = {
    type: ChartType
}

const FavoriteButton = async ({ type }: Props) => {
    const isFavorite = await serverClient.favorites.getIsFavoriteByChatId(type)

    return (
        <HearthButton
            type={type}
            initialIsFavorite={isFavorite}
        />
    )
}

export default FavoriteButton
