import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import sum from "lodash/sum";
import round from "lodash/round";

const average = data => {
  return round(sum(data) / data.length);
};

const Chart = props => {
  return (
    <div>
      <Sparklines height={80} width={100} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};

export default Chart;
