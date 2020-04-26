'use strict';

import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface IProps {
    children: ReactNode;
}

export default function ListEntry({ children }: IProps) {
    const { item, title, col, row, alignRight } = styles;
    const col2 = {...col, ...alignRight};
    return (
        <View style={item}>
            <Text style={title}>Today</Text>
            <View style={row}>
                <Text style={col}>Pollution by hour</Text>
                <Text style={col2}>300 max</Text>
            </View>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 20,
        overflow: 'hidden',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
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