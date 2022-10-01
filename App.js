import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/navigations/Routes';
import AuthProvider from './src/contexts/AuthProvider';
import StyleProvider from './src/contexts/StyleProvider';

const App = () => {
  return (
    <NavigationContainer>
      <StyleProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </StyleProvider>
    </NavigationContainer>
  );
}
export default App;
