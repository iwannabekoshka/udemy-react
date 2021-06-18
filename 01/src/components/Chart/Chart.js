import React from 'react';

import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {
    const dataValues = props.data.map(obj => obj.value);
    const totalMaximum = Math.max(...dataValues)

    return (
        <div className="chart">
            {props.data.map(item =>
                <ChartBar
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    maxValue={totalMaximum}
                />
            )}
        </div>
    )
}

export default Chart;