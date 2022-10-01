import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { BottomNavigation } from "react-native-paper";

import { AuthContext } from "../contexts/AuthProvider";

import Account from "./Client/Account";
import Favorites from "./Client/Favorites";

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;

const Home = () => {
  const { user } = useContext(AuthContext);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'favorites', title: 'Favorites', focusedIcon: 'heart' },
    { key: 'account', title: 'Account', focusedIcon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    favorites: Favorites,
    account: Account,
  });

  return (
    <BottomNavigation      
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.container}
      activeColor={'#FDD282'}
      inactiveColor={'#D56B1D'}
      //getColor={() => Account}
     // getLabelText={route => {route.title}}
    />
    // TESTS CONTEXT
    // <View style={styles.container}>
    //   <Text style={{ fontSize: 30 }}>{user.email}</Text>
    //   <Text style={{ fontSize: 30 }}>{user.status}</Text>
    // </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#58692E',    
  }
})

export default Home;


/*
 #D56B1D - ABOBORA
 #A0AA60 - VERDE MEDIO
 #FDD282 - AMARELO CLARO
 #BFBF5E - VERDE CLARO
 #58692E - VERDE ESCURO
*/