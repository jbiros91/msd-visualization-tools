import { Chart } from '@antv/g2'
import type { ChartOptions } from './types'

const createChart = ({
    container,
    xAxis,
    yAxis,
    key,
    data,
    type = 'interval',
}: ChartOptions) => {
    const chart = new Chart({
        container,
        autoFit: true,
    })

    // Declare visualization
    if (type === 'line') chart.line()
    if (type === 'interval') chart.interval()

    chart
        .data(data) // Bind data
        .encode('x', xAxis) // Encode x channel
        .encode('y', yAxis) // Encode y channel
        .encode('key', key) // Specify key
        .animate('update', { duration: 300 }) // Specify the time to update the animation

    // Render visualization
    void chart.render()

    return chart
}

export default createChart
