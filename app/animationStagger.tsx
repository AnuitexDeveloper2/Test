import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

class RNAnimationStagger extends React.Component<any> {
    constructor(props: any) {
        super(props)
        for (let i = 0; i < 1000; i++) {
            this.animatedValues[i] = new Animated.Value(0)
        }
        this.animations = this.animatedValues.map(value => {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration: 6000,
                    useNativeDriver: false
                }
                )
            })
        }
    animations
    animatedValues = Array<Animated.Value>()
    componentDidMount() {
        this.animate()
    }
    animate = () => {
        Animated.stagger(15, this.animations).start()
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.animatedValues.map((value, index) => (
                        <Animated.View key={index}
                            style={[{ opacity: value },
                            styles.box]} />
                    ))
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {

        width: 15,
        height: 15,
        margin: .5,
        backgroundColor: 'red'
    }
})

export default RNAnimationStagger