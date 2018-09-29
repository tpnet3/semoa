import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'

export default class SemoButton extends React.Component {

  render() {
    return (
      <View style={styles.semoBtn}>
        <Button
          title={this.props.title || "세모"}
          onPress={this.props.onPress}
          backgroundColor="#1e357b"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  semoBtn: {
    height: 56,
    margin: 8,
  }
});
