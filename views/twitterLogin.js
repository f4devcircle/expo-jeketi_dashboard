import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import twitter, { TWLoginButton } from 'react-native-simple-twitter'
import firebase from '../config/firebase';

twitter.setConsumerKey();
const onGetAccessToken = ({ oauth_token, oauth_token_secret }) => {
  // do something with auth token
  console.log(oauth_token);
  console.log("=====");
  console.log(oauth_token_secret);

  const credential = firebase.auth.TwitterAuthProvider.credential(oauth_token, oauth_token_secret);
  firebase.auth().signInWithCredential(credential).catch(console.error);
}

const onSuccess = user => {
  // do something with user
  Alert.alert("Success", "@" + user.screen_name);
}

const onPress = e => console.log("button pressed")
const onClose = e => console.log("close button pressed")
const onError = err => {
  Alert.alert("Error", err)
}


export default function TwitterLogin() {
  return(
    <View style={styles.container}>
      <TWLoginButton
        style={styles.loginButton}
        type="TouchableOpacity"
        onPress={onPress}
        onGetAccessToken={onGetAccessToken}
        onSuccess={onSuccess}
        onClose={onClose}
        onError={onError}>
        <Text style={{ textAlign: "center", color: "#000" }}>
          OAuth
          </Text>
      </TWLoginButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    width: "100%",
    height: 60
  }
});