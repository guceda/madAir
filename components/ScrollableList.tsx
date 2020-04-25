'use strict';

import React, { ReactNode } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import ListEntry from './ListEntry';


interface IProps {
    data: Array<ReactNode>;
}

export default function ScrollableList({ data }: IProps) {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ListEntry>{item}</ListEntry>}
            //keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
});
