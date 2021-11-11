import React, { FC } from 'react';
import { ToDo } from '../../types/Todo';
import Todo from "../shared/todo"

import { FlatList, StyleSheet } from 'react-native';
import { ToDoTypes } from '../../types/enums';

interface Props {
    todos: Array<ToDo>
    deleteToDo: (index: number) => void
    toggleComplete: (index: number) => void
    type: ToDoTypes
}

const ToDoList: FC<Props> = ({ todos, deleteToDo, toggleComplete, type }) => {

    const renderItem = ({ item }: { item: ToDo }) => {
        const component = <Todo toggleComplete={toggleComplete} deleteToDo={deleteToDo} todo={item} />
        if (type === ToDoTypes.All) {
            return component
        }
        if (type === ToDoTypes.Complete && item.complete) {
            return component
        }
        if (type === ToDoTypes.Active && !item.complete) {
            return component
        }

        return null

    };


    return (
        <FlatList
            data={todos}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({

})

export default ToDoList