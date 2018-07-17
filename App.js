import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import Header from "./src/components/header";
import PhotosFetch from "./src/components/photosFetch";
import reducers from "./src/reducers";

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <Provider store={store}>
        <View>
          <Header title="Photos"/>
          <PhotosFetch/>
        </View>
      </Provider>
    );
  }
}

