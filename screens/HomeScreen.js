import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SemoButton from '../components/SemoButton'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text>test!</Text>
        </View>
        <SemoButton onPress={() => this.props.navigation.navigate('FindWord')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
