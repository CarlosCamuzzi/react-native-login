import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState();

  const login = (email, password) => {   
      setUser({
        email: email,
        status: 'active',
      });
      navigation.navigate('Home');    
  }

  return (
    <AuthContext.Provider value={{ login, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

