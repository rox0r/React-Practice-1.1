import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  let totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
          />
        );
      })}
    </div>
  );
}

export default Chart;
