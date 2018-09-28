import React from 'react';
import HomeScreen from './screens/HomeScreen';
import FindWordScreen from './screens/FindWordScreen';
import WriteWordScreen from './screens/WriteWordScreen';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    FindWord: FindWordScreen,
    WriteWord: WriteWordScreen
  },
  {
    initialRouteName: 'Home',
  }
);
