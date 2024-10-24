import { useEffect, useRef } from "react";
import createChart from "./createChart";
import type {Chart, ChartOptions } from './types'

const useChart = (options: Omit<ChartOptions, 'container'>) => {
    const containerRef = useRef<HTMLElement | null>(null);
    const chartRef = useRef<Chart | null>(null);
    const setReference = (node: HTMLElement | null) => {
        containerRef.current = node
    }

    useEffect(() => {
        if(containerRef.current == null)
            return

        chartRef.current = createChart({...options, container: containerRef.current})
    }, [])



    return { chart: chartRef.current,  setReference }
}

export default useChart