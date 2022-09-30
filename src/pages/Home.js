import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import {AuthContext} from "../contexts/AuthProvider";

const Home = () => {
  const { email } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    top: 120,    
  }
})

export default Home;