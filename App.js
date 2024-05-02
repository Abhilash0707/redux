import 'react-native-gesture-handler'
import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Rootnavigation from './src/RootNavigation';
import { Provider } from 'react-redux';
import store from './src/component/Redux/Store/store';



const App = () => {
  return (
 <Provider store={store}>
<Rootnavigation/>
</Provider> 
    
  )
};


export default App;
