import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const rows = [
    { id: 0, text: 'View' },
    { id: 1, text: 'Text' },
    { id: 2, text: 'Image' },
    { id: 3, text: 'ScrollView' },
    { id: 4, text: 'ListView' },
    { id: 10, text: 'View - 1' },
    { id: 11, text: 'Text - 1' },
    { id: 12, text: 'Image - 1' },
    { id: 13, text: 'ScrollView - 1' },
    { id: 14, text: 'ListView - 1' },
    { id: 20, text: 'View - 2' },
    { id: 21, text: 'Text - 2' },
    { id: 22, text: 'Image - 2' },
    { id: 23, text: 'ScrollView - 2' },
    { id: 24, text: 'ListView - 2' },
]

const extractKey = ({ id }) => id

const FlatListComponent = () => {

    renderItem = ({ item }) => {
        return (
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    }

    return (
        <FlatList
            style={styles.container}
            data={rows}
            renderItem={this.renderItem}
            keyExtractor={extractKey}
        />
    );
    
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
})

export default FlatListComponent;