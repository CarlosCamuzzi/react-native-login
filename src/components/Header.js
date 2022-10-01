import React from "react";
import { Appbar } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

const Header = ({ children, title, goBack }) => {
  
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      { // Stack screen true
        goBack &&             
        <Appbar.BackAction
          onPress={() => navigation.goBack(goBack)} />
      }
      <Appbar.Content title={title} />
      {children}
    </Appbar.Header>
  );
}

export default Header;