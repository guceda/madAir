'use strict';

import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface IProps {
    children: ReactNode;
}

export default function ListEntry({ children }: IProps) {
    return (
        <View style={styles.item}>
            <Text>Hola</Text>
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
        borderRadius:10,
    },
    title: {
        fontSize: 32,
    },
});