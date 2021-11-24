import React, { FC, useState } from 'react';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import { TextInput, Text, TouchableOpacity, View, StyleSheet } from "react-native";

import { colors } from "../theme";

interface Props {
    screenProps: any,
    navigation: any
}

const AddCities: FC<Props> = ({screenProps, navigation}) => {
    const [state, setState] = useState({
        city: "",
        country: ""
    })
    const onChangeText = (key: string, value: string) => {
        setState({ ...state, [key]: value })
    }
    const submit = () => {
        if (state.city === '' || state.country === '') {
            alert('please complete form')
            return
        }
        const city = {
            city: state.city,
            country: state.country,
            id: uuidv4(),
            locations: []
        }
        screenProps.addCity(city)
        setState({
            ...state,
            city: '',
            country: ''
        })
        navigation.navigate('Cities')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cities</Text>
            <TextInput
                placeholder='City name'
                onChangeText={val => onChangeText('city', val)}
                style={styles.input}
                value={state.city}

            />
            <TextInput
                placeholder='Country name'
                onChangeText={val => onChangeText('country', val)}
                style={styles.input}
                value={state.country}
            />
            <TouchableOpacity onPress={submit}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add City</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    heading: {
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        height: 50
    }
})

export default AddCities