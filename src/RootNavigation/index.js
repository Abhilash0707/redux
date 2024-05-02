import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNav from '../Navigation/StackNavigation';



export default function Rootnavigation() {
    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    )
}
