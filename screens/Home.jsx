import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = () => (
  <View
    style={styles.container}
  >
    <Text>Ini Home</Text>
  </View>
);

export default Home;
