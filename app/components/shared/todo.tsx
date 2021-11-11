import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ToDo } from '../../types/Todo';
import ToDoButton from '../toDo/toDoButton';

interface Props {
    todo: ToDo
    deleteToDo: (index: number) => void
    toggleComplete: (index: number) => void
}

const Todo: FC<Props> = ({ todo, deleteToDo, toggleComplete }) => {
    return (
        <View style={styles.todoContainer}>
            <Text style={styles.todoText}>{todo.title}</Text>
            <View style={styles.buttons}>
                <ToDoButton
                    name='Done'
                    complete={todo.complete}
                    onPress={() => toggleComplete(todo.toDoIndex)} />
                <ToDoButton
                    name='Delete'
                    onPress={() => deleteToDo(todo.toDoIndex)} />
            </View>
        </View>
    )
}
// SHA256withRSA
const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 17
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: '#fffff'
    }

})
export default Todo