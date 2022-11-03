import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Alert } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";

import Container from "../components/Container";
import Body from "../components/Body";
import Header from "../components/Header"
import Input from "../components/Input";

import { useNavigation } from "@react-navigation/native";

import DataBase from "../DBService/DBService";
import { insert, select } from "../DBService/DBQuery";

const Signup = () => {

  const navigation = useNavigation();

  // User Info
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  // Password Icons
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordCheck, setHidePasswordCheck] = useState(true);

  // Miss Info Form
  const [missInfo, setMissInfo] = useState(false);

  // SnackBar
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    DataBase.getConnection();
  }, [])

  const handleSignUp = () => {
    if (!name || !email || !password || !passwordCheck) {
      setMissInfo(true);
      onToggleSnackBar(); // Snackbar
    } else if (password == passwordCheck) {
      const user = {
        name: name,
        email: email,
        password: password,
      }
      insert(user).then().catch(); // Test ok     
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
          error={missInfo && !name ? true : false}
          right={<TextInput.Icon icon="account" />}
        />
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
        <Input
          label='Password Check'
          value={passwordCheck}
          onChangeText={setPasswordCheck}
          secureTextEntry={hidePasswordCheck}
          autoCorrect={false}
          keyboardType='decimal-pad'
          error={missInfo && !passwordCheck ? true : false}
          right={
            <TextInput.Icon
              onPress={() => hidePasswordCheck
                ? setHidePasswordCheck(false)
                : setHidePasswordCheck(true)
              }
              icon={hidePasswordCheck ? "eye-off" : "eye"} />
          }
        />
        <Button
          style={styles.button}
          mode='contained'
          onPress={() => handleSignUp()} // DATA - LOGIN SCREEN
        >
          <Text style={styles.text}>SIGN UP</Text>
        </Button>

        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Ok',
          }}>
          You need to fill in all the fields
        </Snackbar>
      </Body>
    </Container>
  );
}
const styles = StyleSheet.create({
  // Button
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