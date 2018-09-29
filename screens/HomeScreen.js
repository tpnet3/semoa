import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, RefreshControl } from 'react-native';
import SemoButton from '../components/SemoButton'

export default class HomeScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      moaList: [],
      loading: false,
      refreshing: false,
    }
  }

  static navigationOptions = {
    title: '세모아',
  };

  componentDidMount() {
    this.getMoa();
  }

  getMoa = () => {
    const text = this.props.navigation.getParam('text', '');
    const word = this.props.navigation.getParam('word', '');

    return fetch('https://semoa-4225b.firebaseio.com/moa.json?orderBy="$key"&limitToLast=1000', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((moaList) => {
      moaList = moaList || [];
      
      this.setState({
        moaList: Object.keys(moaList).map(key => moaList[key]).reverse(),
        loading: true
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          {this.state.loading ? (
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => {
                    this.setState({refreshing: true});
                    this.getMoa().then(() => this.setState({refreshing: false}));
                  }}
                />
              }
            >
              {this.state.moaList.map((moa, i) => {
                return (
                  <View key={i} style={{padding: 24, borderBottomColor: '#eee', borderBottomWidth: 1}}>
                    <Text style={{fontSize: 24, marginBottom: 8}}>{moa.text}   X   {moa.word}</Text>
                    <Text style={{fontSize: 16}}>{moa.moa}</Text>
                  </View>
                )
              })}
            </ScrollView>
          ) : (
            <Text style={styles.loading}>Loading...</Text>
          )}
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
  },

  loading: {
    flex: 1,
    alignSelf: 'center',
    margin: 48
  }
});
