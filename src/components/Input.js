import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper";

import { StyleContext } from "../contexts/StyleProvider";

const Input = (props) => {
  const {input } = useContext(StyleContext)

  return (
    <TextInput
      style={styles.input}
      //style={input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginTop: 10,        
  }
})

export default Input;