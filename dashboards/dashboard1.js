export default {
    widgets: [
        {
            type: 'map',
            height: 300,
            data: 'map0',
            chartConfig: {
                initialRegion: {
                    latitude: 6.82646681,
                    longitude: 79.87121907,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.0121
                }
            }
        },
        {
            type: 'line',
            height: 220,
            data: 'line0',
            withDots: false,
            withInnerLines: false,
            withOuterLines: false,
            chartConfig: {
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "whitesmoke",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `lightblue`,
                labelColor: (opacity = 1) => `silver`,
            }
        },
        {
            type: 'progress',
            height: 220,
            data: 'progress0',
            chartConfig: {
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "whitesmoke",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgb(173, 216, 230, ${opacity})`,
                labelColor: (opacity = 1) => `silver`,
            }
        },
    ]
}