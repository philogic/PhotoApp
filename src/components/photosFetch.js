import React, {Component} from "react";
import {View} from "react-native";
import axios from "axios";
import Photos from "./photos";

export default class PhotosFetch extends Component {
  state = {photos: []};

  componentDidMount() {
    axios.get("https://rocky-fortress-49003.herokuapp.com/photos")
      .then(response => {
        this.setState({photos: response.data})
      });
  }

  fetchPhotos() {
    return this.state.photos.map(photo => {
      return <Photos key={photo.id} photo={photo}/>
    })
  }

  render() {
    return (
      <View>
        {this.fetchPhotos()}
      </View>
    )
  }
}