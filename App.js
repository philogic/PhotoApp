import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from "react-redux";
import {createStore} from "redux";
import Header from "./src/components/header";
import PhotosFetch from "./src/components/photosFetch";
import reducers from "./src/reducers";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header title="Photos"/>
          <PhotosFetch/>
        </View>
      </Provider>
    );
  }
}

