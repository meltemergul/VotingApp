// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Detail from './screens/Detail';
import Login from './screens/Login';
const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Home" component={Home} options={{ title: "Questions" }} />
                <Stack.Screen name="Detail" component={Detail} options={{ title: "Detail" }} />
                <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router; 