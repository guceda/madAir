export default {
    widgets: [
        {
            type: 'map',
            id: 'map0',
            header: 'Today',
            title: 'Pollution by unit',
            subtitle: '356mm max',
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
            type: 'text',
            header: 'Today',
            title: 'Average',
            subtitle: '560mm',
            id: 'text0',
            data: 'line0',
        },
        {
            type: 'line',
            id: 'line0',
            header: 'Week',
            title: 'Average Pollution',
            subtitle: '',
            height: 220,
            data: 'line0',
            withDots: false,
            withInnerLines: false,
            withOuterLines: false,
            chartConfig: {
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `#FFDC00`,
                labelColor: (opacity = 1) => `silver`,
            }
        },
        {
            type: 'progress',
            height: 220,
            header: 'Today',
            title: 'By component',
            subtitle: '',
            id: 'progress0',
            data: 'progress0',
            chartConfig: {
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgb(173, 216, 230, ${opacity})`,
                labelColor: (opacity = 1) => `silver`,
            }
        },
        {
            type: 'line',
            id: 'line1',
            header: 'Day',
            title: 'Pollution by day',
            subtitle: '',
            height: 220,
            data: 'line0',
            withDots: false,
            withInnerLines: false,
            withOuterLines: false,
            chartConfig: {
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `lightgreen`,
                labelColor: (opacity = 1) => `silver`,
            }
        },
    ]
}