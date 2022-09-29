import React from "react";
import { Appbar } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

const Header = ({ children, title }) => {
  
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('Login')}/>
      <Appbar.Content title={title} />
      {children}
    </Appbar.Header>
  );
}

export default Header;