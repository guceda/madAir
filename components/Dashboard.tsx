'use strict';

import React from 'react';
import { Text } from 'react-native';

import ScrollableList from './ScrollableList';
import Map from './Map';

let points = [{latitude: 6.83646681, longitude: 79.77121907, weight: 1},
    {latitude: 6.82776681, longitude: 79.871319, weight: 1},
    {latitude: 6.82176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83776681, longitude: 79.871319, weight: 1},
    {latitude: 6.83176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83976681, longitude: 79.861319, weight: 1},
];

const data = [
    <Map data={points}/>,
    <Text>hola1</Text>,
    <Text>hola1</Text>,
    <Text>hola1</Text>,
    <Text>hola1</Text>,
    <Text>hola1</Text>,
];

export default () => <ScrollableList data={data}/>
