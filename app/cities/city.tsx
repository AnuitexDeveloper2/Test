import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CenterMessage from '../components/centerMessage';
import { Location } from "../types/city";

import { colors } from "../theme";

interface Props {
    navigation: any,
    screenProps: any
}

class City extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    state = {
        name: '',
        info: ''
    }
    static navigationOptions = (props: Props) => {
        const { city } = props.navigation.state.params
        return {
            title: city.city,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: colors.primary,
              alignItems: "center",
              justifyContent: "center",
            },
            headerTitleStyle: {
              fontSize: 18,
            },
        }
    }

    addLocation = () => {
        if (this.state.name === '' || this.state.info === '') return
        const { city } = this.props.navigation.state.params
        const location = {
            name: this.state.name,
            info: this.state.info
        }
        this.props.screenProps.addLocation(location, city)
        this.setState({ name: '', info: '' })
    }

    onChangeText = (key: string, value: string) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        const { city } = this.props.navigation.state.params
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={
                        [!city.locations.length && { flex: 1 }]
                    }>
                    <View style={[
                        styles.locationsContainer,
                        !city.locations.length && {
                            flex: 1,
                            justifyContent: 'center'
                        }
                    ]}>
                        {
                            !city.locations.length &&
                            <CenterMessage message='No locations for this city!' />
                        }
                        {
                            city.locations.map((location: Location, index: number) => (
                                <View key={index} style={styles.locationContainer}>
                                    <Text style={styles.locationName}>{location.name}</Text>
                                    <Text style={styles.locationInfo}>{location.info}</Text>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
                <TextInput
                    onChangeText={val => this.onChangeText('name', val)}
                    placeholder='Location name'
                    value={this.state.name}
                    style={styles.input}
                    placeholderTextColor='white'
                />
                <TextInput
                    onChangeText={val => this.onChangeText('info', val)}
                    placeholder='Location info'
                    value={this.state.info}
                    style={[styles.input, styles.input2]}
                    placeholderTextColor='white'
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.addLocation}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Add Location</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    locationsContainer: {

    },
    locationContainer: {
        borderBottomWidth: 2,
        borderColor: colors.primary,
        padding: 10,
    },
    locationName: {
        fontWeight: "bold",
        fontSize: 20
    },
    locationInfo: {
        color: 'rgba(0, 0, 0, .5)',
    },
    input: {
        backgroundColor: colors.primary,
        borderBottomWidth: 2,
        borderColor: "white",
    },
    input2: {
        backgroundColor: colors.primary,
        borderBottomWidth: 2,
        borderColor: "white",
    },
    buttonContainer: {
        padding: 20,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {

    },
    buttonText: {
        color: "white",

    }
})

export default City