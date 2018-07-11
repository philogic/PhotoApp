import React, {Component} from 'react';
import {View} from 'react-native';
import Header from "./src/components/header";
import Photos from "./src/components/photos";

export default class App extends Component {
  render() {
    return (
      <View>
        <Header title="Photos"/>
        <Photos/>
      </View>
    );
  }
}

