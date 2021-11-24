
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNAnimation from './animation';
import RNAnimationParallel from './animationParallel';
import RNAnimationSequence from './animationSequence';
import RNAnimationSpinner from './animationSpinner';
import RNAnimationStagger from './animationStagger';


const App = () => {

  return (
    // <RNAnimation />
    // <RNAnimationSpinner />
    // <RNAnimationParallel /> 
    // <RNAnimationSequence />
    <RNAnimationStagger />
  )
}

export default App;
