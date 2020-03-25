import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Profile = () => (
  <View
    style={styles.container}
  >
    <Text>Ini Profile</Text>
  </View>
);

export default Profile;
