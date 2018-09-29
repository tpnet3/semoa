import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SemoButton from '../components/SemoButton'
import DeviceInfo from 'react-native-device-info';

export default class WriteWordScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      moa: ''
    }
  }

  postMoa = () => {
    const text = this.props.navigation.getParam('text', '');
    const word = this.props.navigation.getParam('word', '');
    const uniqueId = DeviceInfo.getUniqueID();

    return fetch('https://semoa-4225b.firebaseio.com/moa.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text, word,
        unique: uniqueId,
        moa: this.state.moa
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson;
    })
  }

  render() {
    const text = this.props.navigation.getParam('text', '');
    const word = this.props.navigation.getParam('word', '');

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text>{text} X {word}</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(moa) => this.setState({moa})}
            value={this.state.moa}/>
        </View>
        <SemoButton title="moa 발행" onPress={this.postMoa} />
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
  },
});
