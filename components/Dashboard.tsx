'use strict';

import React, { ReactNode } from 'react';

import ScrollableList from './ScrollableList';

import Map from './widgets/Map';
import Chart from './widgets/Line';
import Progress from './widgets/Progress';

import mockdata from '../mock/mockdata';


interface WidgetConfiguration {
    type: string,
    height: number,
    data: string,
    chartConfig: object,
}

interface WidgetsConfiguration {
    widgets: Array<WidgetConfiguration>
}

const widgets: Widgets = {
    map: Map,
    line: Chart,
    progress: Progress,
};


function fillDashboard(config: WidgetsConfiguration) {
    return config.widgets.map(me => widgets[me.type](me, mockdata[me.data]));
}


export default function Dashboard ({ config }) {
    const data0 = fillDashboard(config);
    return <ScrollableList data={data0} />
}
