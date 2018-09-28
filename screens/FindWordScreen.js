import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Badge } from 'react-native-elements';
import words from '../constants/words';
import SemoButton from '../components/SemoButton'

export default class FindWordScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      text: '',
      word: ''
    }
  }

  updateRandomWord = () => {

    if ( ! this.state.text) {
      Alert.alert(
        '단어가 입력되지 않았습니다.',
        '단어를 입력해주세요.',
        [{text: 'OK'}],
        {cancelable: false}
      )
      
      return;
    }

    this.setState({
      word: words[Math.floor(Math.random() * words.length)]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <TextInput
            style={this.state.text.length != 0 ? styles.textInput : [styles.textInput, styles.textInputPlaceholder]}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="단어를 입력하세요"
          />
          {this.state.word ? (
            <View>
              <Text style={styles.multipleIcon}>X</Text>
              <Text style={styles.word}>{this.state.word}</Text>
              <Badge
                onPress={() => this.props.navigation.replace('WriteWord', {text: this.state.text, word: this.state.word})}
                containerStyle={{
                  marginTop: 48,
                  backgroundColor: 'violet',
                  alignSelf: 'center',
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: '#d6d7da',
                }} >
                <Text>moa 발행하기</Text>
              </Badge>
            </View>
          ) : undefined}
        </View>
        <SemoButton onPress={this.updateRandomWord} />
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
    flex: 1
  },

  word: {
    fontSize: 36,
    alignSelf: 'center',
    margin: 24
  },

  textInput: {
    marginLeft: 48,
    marginRight: 48,
    marginTop: 48,
    marginBottom: 24,
    height: 96,
    textAlign: 'center',
    fontSize: 36
  },

  textInputPlaceholder: {
    fontSize: 18
  },

  multipleIcon: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#424242'
  },
});
