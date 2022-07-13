import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {
    let barFillHeight = '0%';
    if(props.max > 0){
        barFillHeight= Math.round((props.value / props.maxValue)*100) + '%';
    }
    return <div className="chart">
        {props.dataPoints.map((dataPoint) => (<ChartBar
            key={dataPoint.key}
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
        />
        ))}
    </div>
};
export default Chart;