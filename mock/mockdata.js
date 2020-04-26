
export default {
    map0: [
        { latitude: 6.83646681, longitude: 79.77121907, weight: 1 },
        { latitude: 6.82776681, longitude: 79.871319, weight: 1 },
        { latitude: 6.82176681, longitude: 79.871319, weight: 1 },
        { latitude: 6.83776681, longitude: 79.871319, weight: 1 },
        { latitude: 6.83176681, longitude: 79.871319, weight: 1 },
        { latitude: 6.83976681, longitude: 79.861319, weight: 1 },
    ],
    line0: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ]
            }
        ]
    },
    progress0: {
        labels: ["C02", "Methane", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    },
}