import React, { FC, useState } from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AddBookAction } from '../redux/actions/books';
import { AppState, Book } from '../types/state';
import BookItem from './bookItem';

interface Props {

}

const Books: FC<Props> = () => {

    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: '',
        author: ''
    })

    const handleInputs = (key: string, value: string) => {
        setState({ ...state, [key]: value })
    }

    const booksState = useSelector((state: AppState) => state.booksState)
    const renderItem = ({ item }: { item: Book }) => {
        if (item) {
            return <BookItem book={item} />
        }
        return null

    };

    const addButton = () => {
        dispatch(AddBookAction(state))
        setState({...state, name: '', author: ''})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Books
            </Text>
            <ScrollView style={styles.booksContainer}>
                <FlatList data={booksState.books} renderItem={renderItem} />

            </ScrollView >
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} value={state.name} onChangeText={value => handleInputs("name", value)} />
                    <TextInput style={styles.input} value={state.author} onChangeText={value => handleInputs("author", value)} />
                </View>
                <TouchableOpacity onPress={addButton}>
                    <View style={styles.addButtonContainer}>
                        <Text style={styles.addButton}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    booksContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        flex: 1
    },
    inputContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderTopColor: '#ededed',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    },
    inputWrapper: {
        flex: 1
    },
    input: {
        height: 44,
        padding: 7,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        marginBottom: 5
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28
    },
    addButtonContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#ededed',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
})

export default Books