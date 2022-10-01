import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import Body from "../components/Body";
import Container from "../components/Container";

import { AuthContext } from "../contexts/AuthProvider";

const Home = () => {
  // INSERT CONTAINER / BODY / HEADER
  const { user } = useContext(AuthContext);

  // TESTS CONTEXTS
  return (
    <Container>
      <Body>
        <View style={styles.container}>
          <Text style={{ fontSize: 30 }}>{user.email}</Text>
          <Text style={{ fontSize: 30 }}>{user.status}</Text>
        </View>
      </Body>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    //top: 120,
  }
})

export default Home;