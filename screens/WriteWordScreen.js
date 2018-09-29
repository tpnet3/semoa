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

  static navigationOptions = {
    title: 'moa 발행하기',
  };

  postMoa = () => {
    const text = this.props.navigation.getParam('text', '');
    const word = this.props.navigation.getParam('word', '');
    let uniqueId = undefined;

    try {
      uniqueId = DeviceInfo.getUniqueID();
    } catch(e) {
      // Ignore
    }

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
      this.props.navigation.pop();
    })
  }

  render() {
    const text = this.props.navigation.getParam('text', '');
    const word = this.props.navigation.getParam('word', '');

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={{alignSelf: 'center', fontSize: 24, marginTop: 24, padding: 24}}>{text}   X   {word}</Text>
          <View style={{borderWidth: 1, borderColor: '#727272', padding: 16, margin: 24}}>
            <TextInput
              style={{height: 120, fontSize: 16}}
              multiline={true}
              textAlignVertical="top"
              underlineColorAndroid="transparent"
              onChangeText={(moa) => this.setState({moa})}
              value={this.state.moa}/>
          </View>
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
  },
});
