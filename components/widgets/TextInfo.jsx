'use strict';

import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function TextInfo({ header, title, subtitle }) {
    return (
        <View>
            <Text style={styles.title}>{header}</Text>
            <View style={styles.row}>
                <Text style={styles.col}>{title}</Text>
                <Text style={{ ...styles.col, ...styles.alignRight }}>{subtitle}</Text>
            </View>
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