import { Chart, G2Spec } from '@antv/g2';
import {useEffect, useRef, useState} from 'react';

const render = (container: HTMLElement) => {
    const chart = new Chart({
        container,
    });

    // Prepare data
    const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
    ];

    // Declare visualization
    chart
        .interval() // Create an Interval tag
        .data(data) // Bind data
        .encode('x', 'genre') // Encode x channel
        .encode('y', 'sold') // Encode y channel
        .encode('key', 'genre') // Specify key
        .animate('update', { duration: 300 }); // Specify the time to update the animation

    // Render visualization
    chart.render();

    return chart;
}

type ChartInstance = ReturnType<typeof render>


const useChart = () => {
    const containerRef = useRef<HTMLElement | null>(null);
    const chartRef = useRef<ChartInstance | null>(null);
    const setReference = (node: HTMLElement | null) => {
        containerRef.current = node
    }

    useEffect(() => {
        if(containerRef.current == null)
            return

        chartRef.current = render(containerRef.current)
    }, [])





    const update = () => {
        if(chartRef.current === null)
            return

        // Get Interval Mark
        const interval = chartRef.current.getNodesByType('interval')[0];

        // Simulate and update Interval data
 /*       const newData = interval.data().map((d) => ({
            ...d,
            sold: Math.random() * 400 + 100,
        }));

        interval.data(newData);*/

        // Re-render
        chartRef.current.render();
        // as above
    }

    return { chart: chartRef.current, update, setReference }

}


export default useChart