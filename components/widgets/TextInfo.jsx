'use strict';

import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function TextInfo(conf, data) {
    const { title, col, row, alignRight } = styles;
    const col2 = { ...col, ...alignRight };
    return (
        <View style={row}>
            <Text style={col}>Info 1</Text>
            <Text style={col2}>Info 2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'lightgrey'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    col: {
        width: '50%',
        fontSize: 23,
        fontWeight: 'bold',
        color: '#484848'
    },
    alignRight: {
        textAlign: 'right',
    },
});