'use client'

import useChart, { type ChartOptions } from '@/common/hooks/useChart'

type Props = Omit<ChartOptions, 'container'>

const Chart = (props: Props) => {
    const { setReference } = useChart(props)

    return (
        <div
            className='h-96'
            ref={setReference}
        />
    )
}

export default Chart
