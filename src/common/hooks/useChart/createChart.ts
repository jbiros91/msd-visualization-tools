import { Chart } from '@antv/g2'
import type { ChartOptions } from './types'

const createChart = ({ container, xAxis, yAxis, key, data }: ChartOptions) => {
    const chart = new Chart({
        container,
        autoFit: true,
    })

    // Declare visualization
    chart
        .interval() // Create an Interval tag
        .data(data) // Bind data
        .encode('x', xAxis) // Encode x channel
        .encode('y', yAxis) // Encode y channel
        .encode('key', key) // Specify key
    // .animate('update', { duration: 300 }) // Specify the time to update the animation

    // Render visualization
    chart.render()

    return chart
}

export default createChart
