import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Main from './src/navigations/Main';
import AuthProvider from './src/contexts/AuthProvider';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </NavigationContainer>
  );
}
export default App;
