import React from 'react';
import { View, Animated, Easing, StyleSheet, Text } from 'react-native';

class RNAnimationSpinner extends React.Component {
    state = {
        loading: true
    }

    componentDidMount() {
        this.animate()
    }

    animatedRotation = new Animated.Value(0)

    animate = () => {
        Animated.loop(
            Animated.timing(
                this.animatedRotation,
                {
                    toValue: 1,
                    duration: 1800,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )
        ).start()
    }

    render() {
        const rotation = this.animatedRotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        const { loading } = this.state;
        return (
            <View style={styles.container}>
                {
                    loading ? (
                        <Animated.Image
                            source={require("./assets/images/dots.png")}
                            style={{
                                width: 40,
                                height: 40,
                                transform: [{ rotate: rotation }]
                            }}
                        />
                    ) : (
                        <Text>Welcome</Text>
                    )
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 50,
    },
    input: {
        height: 50,
        marginHorizontal: 15,
        backgroundColor: '#ededed',
        marginTop: 10,
        paddingHorizontal: 9,
    },
});

export default RNAnimationSpinner