import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { ToDoTypes } from '../../types/enums';
import TabBarItem from './tabBarItem';

interface Props {
    type: ToDoTypes;
    setType: (type: ToDoTypes) => void
}

const TabBar: FC<Props> = ({ type, setType }) => {
    return (
        <View style={styles.container}>
            <TabBarItem  type={type} setType={() => setType(ToDoTypes.All)} title={ToDoTypes.All} border />
            <TabBarItem type={type} setType={() => setType(ToDoTypes.Active)} title={ToDoTypes.Active} border />
            <TabBarItem type={type} setType={() => setType(ToDoTypes.Complete)} title={ToDoTypes.Complete} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})

export default TabBar