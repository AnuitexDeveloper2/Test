import React, { FC } from 'react';

import { View, StyleSheet, Text } from "react-native";

import { colors } from "../theme";

interface Props {
    message: string
}

const CenterMessage: FC<Props> = ({ message }) => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.message}>
                {message}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    emptyContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    message: {
        alignSelf: "center",
        fontSize: 20
    }
})

export default CenterMessage