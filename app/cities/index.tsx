import React from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import CenterMessage from "../components/centerMessage";

import { colors } from "../theme";
import { City } from '../types/city';

interface Props {
    screenProps: any,
    navigation: any
}

class Cities extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    static navigationOptions = {
        title: 'Cities',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
    };

    navigate = (item: any) => {
        this.props.navigation.navigate('City', { city: item })
    }

    render() {

        const { screenProps: { cities } } = this.props
        return (
            <ScrollView contentContainerStyle={[!cities.length && { flex: 1 }]}>
                <View style={[!cities.length &&
                    { justifyContent: 'center', flex: 1 }]}>
                    {
                        !cities.length && <CenterMessage message='No saved cities!' />
                    }
                    {
                        cities.map((item: City, index: number) => (
                            <TouchableWithoutFeedback
                                onPress={() => this.navigate(item)} key={index} >
                                <View style={styles.cityContainer}>
                                    <Text style={styles.city}>{item.city}</Text>
                                    <Text style={styles.country}>{item.country}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    city: {
        fontSize: 20,
    },
    country: {
        color: 'rgba(0, 0, 0, .5)'
    },
})

export default Cities