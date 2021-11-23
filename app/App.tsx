
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { ToDoTypes } from './types/enums';
import { ToDo } from './types/Todo';


interface State {
  inputValue: string;
  todos: Array<ToDo>;
  type: ToDoTypes
}

const App = () => {

  const [state, setState] = useState({
    darkTheme: false
  })


  const handleClick = () => {
    setState({ ...state, darkTheme: !state.darkTheme })
  }


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={require("./assets/images/user.png")} />
        </View>
        <View>
          <Text style={styles.cardTitle}>
            John Dou
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            React Native Developer
          </Text>
        </View>
        <View>
          <Text style={styles.cardText}>
            John is a really great JavaScript developer. He
            loves using JS to build React Native applications
            for iOS and Android.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    height: 400,
    width: 300,
    backgroundColor: "dodgerblue",
    borderRadius: 10,
    borderWidth: 3,
    alignItems: "center",
  },
  cardImageContainer: {
    marginTop: 20,
    backgroundColor: "white",
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  cardImage: {
    width: 50,
    height: 50
  },

  cardTitle: {
    marginTop: 12,
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    textShadowColor: 'black',
    textShadowOffset: { width: -2, height: -2 },
    textShadowRadius: 4
  },
  cardDescription: {
    borderColor: 'black',
    borderBottomWidth: 2,
    marginTop: 30,
    fontWeight: "bold"
  },
  cardText: {
    textAlign: "center",
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    fontStyle: 'italic',
    // textDecorationLine: 'underline',
    // textDecorationColor: "rgb(255, 255, 255)",
    // textDecorationStyle: 'double',
  }

});

export default App;
