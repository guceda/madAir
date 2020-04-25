'use strict';

import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface IProps {
    children: ReactNode;
}

export default function ListEntry({ children }: IProps) {
    return (
        <View style={styles.item}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightblue',
        overflow: 'hidden',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
    },
    title: {
        fontSize: 32,
    },
});