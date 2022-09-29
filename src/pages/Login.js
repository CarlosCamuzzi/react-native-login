import React, { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, TextInput, Text } from "react-native-paper";

import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";

import { useNavigation } from "@react-navigation/native";

const Login = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  // DATA
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("You need to provide your email and password");
    }
    // SELECT TABLE USER
  }

  return (
    <Container>
      <Body>
        <Input
          label='E-mail'
          value={email}
          onChangeText={setEmail}          
          right={<TextInput.Icon icon="email" />}
        />
        <Input
          label='Password'
          value={password}
          onChangeText={setPassword}
          //secureTextEntry={false} // Hide Password
          //autoCorrect={false}
          right={<TextInput.Icon icon="lock" />}
          keyboardType='decimal-pad'
        />
        <Button
          style={styles.button}
          mode='contained'
          onPress={() => handleLogin()} // DATA
        >
          <Text style={styles.text}>LOGIN</Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={textSignUp}>SIGN UP</Text>
        </TouchableOpacity>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 45,
    backgroundColor: '#58692E',
    marginTop: 45,
    marginBottom: 60,
    alignSelf: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    lineHeight: 25,
  },
  textSign: {
    color: '#000',
    alignSelf: 'center',
  },
});

const textSignUp = StyleSheet.compose(styles.text, styles.textSign);

export default Login;

/*
 #D56B1D - ABOBORA
 #A0AA60 - VERDE MEDIO
 #FDD282 - AMARELO CLARO
 #BFBF5E - VERDE CLARO
 #58692E - VERDE ESCURO
*/
