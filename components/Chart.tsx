'use strict';

import React, { ReactNode } from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Dimensions } from 'react-native';




export default function Chart(conf, data) {
    return (
        <LineChart
            data={data}
            width={Dimensions.get("window").width} // from react-native
            height={conf.height}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={conf.chartConfig}
            bezier
        />
    );
}
