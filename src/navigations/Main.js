import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: Header => { null }
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default Main;