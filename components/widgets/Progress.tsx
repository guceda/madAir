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
import TextInfo from './TextInfo';


export default function Line(conf, data) {
    return (
        <View>
         <TextInfo
                header={conf.header}
                title={conf.title}
                subtitle={conf.subtitle}
            />
        <ProgressChart
            data={data}
            width={Dimensions.get("window").width}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={conf.chartConfig}
            hideLegend={false}
        />
        </View>
    );
}
