'use strict';

import React from 'react';
import MapView, { Heatmap } from 'react-native-maps';
import { StyleSheet } from 'react-native';

interface DensityMarkers {
    latitude: number,
    longitude: number,
    weight: number
}

interface IProps {
    points: Array<DensityMarkers>;
}


export default function Map(conf, data) {
    return (
        <MapView
            style={styles.map(conf.height)}
            {...conf.chartConfig}
        >
            <Heatmap
                points={data}
                opacity={0.5}
                radius={50}
            />
        </MapView>

    );
}



const styles = StyleSheet.create({
    map: h => ({
        height: h,
    }),
});
