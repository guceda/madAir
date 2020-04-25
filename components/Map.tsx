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


export default function Map({ points }: IProps) {
    return (
        <MapView style={styles.map}
            initialRegion={{
                latitude: 6.82646681,
                longitude: 79.87121907,
                latitudeDelta: 0.09,
                longitudeDelta: 0.0121
            }}
        >
            <Heatmap
                points={points}
                opacity={0.5}
                radius={50}
            />

        </MapView>

    );
}



const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});
