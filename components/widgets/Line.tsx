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
import { Dimensions, View } from 'react-native';




export default function Line(conf, data) {
    return (
            <LineChart
                data={data}
                withDots={conf.withDots}
                withInnerLines={conf.withInnerLines}
                withOuterLines={conf.withOuterLines}
                width={Dimensions.get("window").width - 30} // from react-native
                height={conf.height}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={conf.chartConfig}
                bezier
            />
    );
}
