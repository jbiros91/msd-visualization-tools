import { Runtime } from '@antv/g2'

export type Chart = Runtime
export type ChartOptions = {
    container: HTMLElement
    data: unknown[]
    xAxis: string
    yAxis: string
    key: string
}
