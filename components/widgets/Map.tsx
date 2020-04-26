'use strict';

import React from 'react';
import MapView, { Heatmap } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import TextInfo from './TextInfo';
import mapStyle from './mapsStyle';

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
        <View>
             <TextInfo
                header={conf.header}
                title={conf.title}
                subtitle={conf.subtitle}
            />
        <MapView
            customMapStyle={mapStyle}
            style={styles.map(conf.height)}
            {...conf.chartConfig}
        >
            <Heatmap
                points={data}
                opacity={0.5}
                radius={50}
            />
        </MapView>
        </View>
    );
}



const styles = StyleSheet.create({
    map: h => ({
        height: h,
    }),
});
