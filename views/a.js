import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux';

const A = function(props) {
  return (
    <View style={styles.container}>
      <Text>{props.count}</Text>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count.counter
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default connect(mapStateToProps, null)(A);