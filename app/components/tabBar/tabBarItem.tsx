import React, { FC } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

import { ToDoTypes } from '../../types/enums';


interface Props {
    type: ToDoTypes;
    setType: (type: ToDoTypes) => void;
    title: ToDoTypes;
    border?: boolean | undefined
}

const TabBarItem: FC<Props> = ({ type, setType, title, border }) => {
    return (
        <TouchableHighlight
            underlayColor='#efefef'
            onPress={() => setType(title)}
            style={[
                styles.item,
                border ? styles.border : null,
                type === title ? styles.selected : null]}>
            <Text>
                {ToDoTypes[title]}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    itemText: {
        color: '#777777',
        fontSize: 16
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    bold: {
        fontWeight: 'bold'
    }
})

export default TabBarItem
