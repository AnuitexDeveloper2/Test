import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState, Book } from '../types/state';

interface Props {

}

const Books: FC<Props> = () => {
    const booksState = useSelector((state: AppState) => state.booksState)
    const renderItem = ({ item }: { item: Book }) => {
        console.log(item)
        const component = <View> <Text>{item.name}</Text></View>

        return component

    };

    return (
        <View>
            <View style={{ height: 30, alignItems: "center", borderBottomWidth: 2, borderBottomColor: "black", }}>
                <Text style={{ fontWeight: "bold" }}>
                    Books
                </Text>
            </View>
            <View>
                <FlatList data={booksState.books} renderItem={renderItem} />

            </View>
        </View>
    )
}

export default Books