export default {
    widgets: [
        {
            type: 'map',
            height: 300,
            data: 'mapPoints',
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
            data: 'chart',
            chartConfig: {
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }

            }
        },
    ]
}