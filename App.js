import React from 'react';
import {View} from 'react-native';
import Header from "./src/components/header";

export default class App extends React.Component {
  render() {
    return (
      <View >
        <Header title="Photos"/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
