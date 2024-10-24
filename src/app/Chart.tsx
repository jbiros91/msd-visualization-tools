import useChart from '@/common/hooks/useChart'

type Props = {
    data: unknown[]
}

const Chart = ({ data }: Props) => {
    const { setReference } = useChart({
        data,
        xAxis: 'date',
        yAxis: 'value',
        key: 'date',
    })

    return <div ref={setReference}></div>
}

export default Chart
