import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Main from './src/navigations/Main';
import AuthProvider from './src/contexts/AuthProvider';
import StyleProvider from './src/contexts/StyleProvider';

const App = () => {
  return (
    <NavigationContainer>
      <StyleProvider>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </StyleProvider>
    </NavigationContainer>
  );
}
export default App;
