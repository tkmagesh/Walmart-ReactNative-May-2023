import React, { Component } from 'react';
import { SectionList, Text, StyleSheet } from 'react-native';

const sections = [
    {
        id: 0,
        title: 'Basic Components',
        active : true,
        data: [
            { id: 0, text: 'View' },
            { id: 1, text: 'Text' },
            { id: 2, text: 'Image' },
        ]
    },
    {
        id: 1,
        title: 'List Components',
        active : false,
        data: [
            { id: 3, text: 'ScrollView' },
            { id: 4, text: 'ListView' },
        ]
    }
]

const extractKey = ({ id }) => id

export default function SectionListComponent()  {

    const renderItem = ({ item }) => {
        return (
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    }

    const renderSectionHeader = ({ section }) => {
        return (
            <Text style={styles.header}>
                {section.title}
            </Text>
        )
    }

    
    return (
        <SectionList
            style={styles.container}
            sections={sections}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
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
    header: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'steelblue',
        color: 'white',
        fontWeight: 'bold',
    },
})
