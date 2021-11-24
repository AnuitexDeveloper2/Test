import React from 'react';
import { View, Animated, Button, StyleSheet, TextInput } from 'react-native';

class RNAnimation extends React.Component {
    animatedWidth = new Animated.Value(200);
    animate = (value: number) => {
        Animated.timing(this.animatedWidth, {
            toValue: value,
            duration: 500,
            useNativeDriver: false
        }).start()
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{ width: this.animatedWidth }}>
                    <TextInput
                        style={styles.input}
                        onBlur={() => this.animate(200)}
                        onFocus={() => this.animate(350)}
                        ref={input => this.input = input}
                    />
                    <Button
                        title='Submit'
                        onPress={() => this.input.blur()}
                    />
                </Animated.View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default RNAnimation