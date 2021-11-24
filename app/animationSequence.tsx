import React from 'react';
import { View, Animated, Easing, StyleSheet, Text } from 'react-native';

class RNAnimationSequence extends React.Component {

    AnimatedValue1 = new Animated.Value(300);
    AnimatedValue2 = new Animated.Value(300);
    AnimatedValue3 = new Animated.Value(300);

    componentDidMount() {
        this.animate()
    }

    animate = () => {
        const createAnimation = (value: Animated.Value) => {
            return Animated.timing(value, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            })
        }

        Animated.sequence([
            createAnimation(this.AnimatedValue1),
            createAnimation(this.AnimatedValue2),
            createAnimation(this.AnimatedValue3)
        ]).start()
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={[styles.text,
                { marginTop: this.AnimatedValue1 }]}>
                    1
                </Animated.Text>
                <Animated.Text style={[styles.text,
                { marginTop: this.AnimatedValue2 }]}>
                    2
                </Animated.Text>
                <Animated.Text style={[styles.text,
                { marginTop: this.AnimatedValue3 }]}>
                    3
                </Animated.Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        marginHorizontal: 20,
        fontSize: 26
    }
});

export default RNAnimationSequence