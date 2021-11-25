import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Book } from '../types/state';

interface Props {
    book: Book
}

const BookItem: FC<Props> = ({ book }) => {
    return (
        <View style={styles.book}>
            <Text style={styles.name}>{book.name}</Text>
            <Text style={styles.author}>{book.author}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    book: {
        padding: 20
    },
    name: {
        fontSize: 18
    },
    author: {
        fontSize: 14,
        color: '#999'
    }
})

export default BookItem