
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Button from './components/shared/button';
import Heading from './components/shared/heading';
import Input from './components/shared/input';
import TabBar from './components/tabBar';
import ToDoList from './components/toDo/index';
import { ToDoTypes } from './types/enums';
import { ToDo } from './types/Todo';

let toDoIndex = 0

interface State {
  inputValue: string;
  todos: Array<ToDo>;
  type: ToDoTypes
}

const App = () => {

  const [state, setState] = useState<State>({
    inputValue: '',
    todos: [],
    type: ToDoTypes.All
  })

  const handleInput = (value: string) => {
    setState({ ...state, inputValue: value })
  }

  const deleteToDo = (index: number) => { 
    let { todos } = state

    todos = todos.filter((item) => item.toDoIndex !== index)

    setState({ ...state, todos })
  }

  const setType = (type: ToDoTypes) => {
    setState({ ...state, type: type })
  }

  const toggleComplete = (index: number) => {
    let { todos } = state

    todos[index].complete = !todos[index].complete

    setState({ ...state, todos })

  }

  const submitToDo = () => {
    if (!state.inputValue) {
      return
    }
    const toDo = {
      title: state.inputValue,
      toDoIndex: toDoIndex,
      complete: false
    }
    toDoIndex++
    const todos = [...state.todos, toDo]
    setState({ ...state, todos, inputValue: '' })
  }


  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}
        keyboardShouldPersistTaps="always">
        <Heading />
        <Input inputValue={state.inputValue} inputChange={handleInput} />
        <ToDoList type={state.type} todos={state.todos} deleteToDo={deleteToDo} toggleComplete={toggleComplete} />
        <Button submitToDo={submitToDo} />
      </ScrollView>
      <TabBar setType={setType} type={state.type} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
