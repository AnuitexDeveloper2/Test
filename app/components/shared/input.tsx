import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
    inputValue: string,
    inputChange: (value: string) => void
}

const Input: FC<Props> = ({ inputValue, inputChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder='What needs to be done?'
                placeholderTextColor='#CACACA'
                selectionColor='#666666' 
                value={inputValue}
                onChangeText={inputChange}
                />

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }
    },
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default Input