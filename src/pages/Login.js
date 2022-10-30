import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, TextInput, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthProvider";

import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";

const Login = () => {

  const navigation = useNavigation();
  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [missInfo, setMissInfo] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);


  const handleLogin = () => {
    if (!email || password)
      setMissInfo(true);

    // DATA
    login(email, password); // Function in AuthContext
  }

  return (
    <Container>
      <Body>
        <Input
          label='E-mail'
          value={email}
          onChangeText={setEmail}
          error={missInfo && !email ? true : false}
          right={<TextInput.Icon icon="email" />}
        />
        <Input
          label='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
          autoCorrect={false}
          //activeUnderlineColor={'#ffa224'}
          error={missInfo && !password ? true : false}
          keyboardType='decimal-pad'
          right={
            <TextInput.Icon
              onPress={() => hidePassword
                ? setHidePassword(false)
                : setHidePassword(true)
              }
              icon={hidePassword ? "eye-off" : "eye"} />
          }
        />
        <Button
          style={styles.buttonLogin}
          mode='contained'
          onPress={() => handleLogin()} // DATA
        >
          <Text style={styles.text}>LOGIN</Text>
        </Button>


        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Button
            style={styles.buttonSignup}
            mode='outlined'
          >
            <Text style={textSignUp}>SIGN UP</Text>
          </Button>
        </TouchableOpacity>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonLogin: {
    width: 250,
    height: 45,
    backgroundColor: '#58692E',
    marginTop: 45,
    marginBottom: 70,
    alignSelf: 'center',
  },
  buttonSignup: {
    width: 250,
    height: 45,
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

