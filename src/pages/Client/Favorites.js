import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "../../components/Input"
import Header from "../../components/Header";
import Body from "../../components/Body";
import Container from "../../components/Container";

const Favorites = () => {

  return (
    <Container>
      <Header title={'Favorites'}/>
      <Body>
        
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  inputFlex: {
    flexBasis: 150,
    flexGrow: 1,
    // Default
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginTop: 10,
  }
});

export default Favorites;