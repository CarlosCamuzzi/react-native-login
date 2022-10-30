import React, { createContext, useState } from "react";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState();  

  const login = (email, password) => {
    if (!email || !password) {
      Alert.alert("You need to provide your email and password");
    }
    else {
      setUser({
        email: email,
        status: 'active',
      });
      navigation.navigate('Home');
    }
  }

  return (
    <AuthContext.Provider value={{ login, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;