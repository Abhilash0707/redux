import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dashboard from '../../Screens/Dashboard'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile_Screen from '../../Screens/Profile';





const StackNav = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='dashboard' screenOptions={{ headerShown: false }}>
             <Stack.Screen name="dashboard" component={Dashboard} />
             <Stack.Screen name="profile_Screen" component={Profile_Screen} />
            
        </Stack.Navigator>
    );
}
export default StackNav
