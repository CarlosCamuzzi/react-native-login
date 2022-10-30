import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/navigations/Routes';
import AuthProvider from './src/contexts/AuthProvider';


const App = () => {
  return (
    <NavigationContainer>   
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </NavigationContainer>
  );
}
export default App;
