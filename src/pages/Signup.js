import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";

import Container from "../components/Container";
import Body from "../components/Body";
import Header from "../components/Header"
import Input from "../components/Input";

import { useNavigation } from "@react-navigation/native";

import DataBase from "../DBService/DBService";
import { insert, select } from "../DBService/DBQuery";

const Signup = () => {

  const navigation = useNavigation();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  useEffect(() => {
    DataBase.getConnection();
  }, [])

  const handleSignUp = async () => {
    if (!name || !email || !password || !passwordCheck) {
      Alert.alert("You need to fill in all the fields");
    } else if (password == passwordCheck) {
      const user = {
        name: name,
        email: email,
        password: password,
      }
      //console.log('handle sign ok'); // Test OK
      //console.log(user);  // Test OK
      await insert(user).then().catch(); // Test ok
      //await select(user).then(); // Test ok
      navigation.navigate('Login');
    } else {
      Alert.alert("Password does not match");
    }
  }

  return (
    <Container>
      <Header title='Sign Up'></Header>
      <Body>
        <Input
          label='Name'
          value={name}
          onChangeText={setName}
          right={<TextInput.Icon icon="account" />}
        />
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
          autoCorrect={false}
          right={<TextInput.Icon icon="lock" />}
          keyboardType='decimal-pad'
        />
        <Input
          label='Password Check'
          value={passwordCheck}
          onChangeText={setPasswordCheck}
          //secureTextEntry={false} // Hide Password
          autoCorrect={false}
          right={<TextInput.Icon icon="lock" />}
          keyboardType='decimal-pad'
        />
        <Button
          style={styles.button}
          mode='contained'
          onPress={() => handleSignUp()} // DATA - LOGIN SCREEN
        >
          <Text style={styles.text}>SIGN UP</Text>
        </Button>

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
});

export default Signup;