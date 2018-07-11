import React, {Component} from "react";
import {View, Text} from "react-native";
import axios from "axios";

export default class PhotosFetch extends Component {
  render() {
    axios.get("https://secure-badlands-45428.herokuapp.com/photos.json")
      .then(response => console.log(response.data));
    return (
      <View>
        <Text>Some Text</Text>
      </View>
    )
  }
}