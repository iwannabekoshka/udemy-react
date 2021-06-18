import React from 'react';

import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {

    return (
        <div className="chart">
            {props.items.map(item =>
                <ChartBar
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    maxValue={null}
                />
            )}
        </div>
    )
}

export default Chart;