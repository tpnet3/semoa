import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WriteWordScreen extends React.Component {
  render() {
    const text = this.props.navigation.getParam('text', '');
    const word = this.props.navigation.getParam('word', '');

    return (
      <View style={styles.container}>
        <Text>{text} X {word}</Text>
      </View>
    );
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
