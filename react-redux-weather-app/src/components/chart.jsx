import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Chart = props => {
  return (
    <div>
      <Sparklines height={80} width={100} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
};

export default Chart;
