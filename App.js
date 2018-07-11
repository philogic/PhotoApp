import React, {Component} from 'react';
import {View} from 'react-native';
import Header from "./src/components/header";
import PhotosFetch from "./src/components/photosFetch";

export default class App extends Component {
  render() {
    return (
      <View>
        <Header title="Photos"/>
        <PhotosFetch/>
      </View>
    );
  }
}

