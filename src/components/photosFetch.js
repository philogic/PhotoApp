import React, {Component} from "react";
import {ScrollView} from "react-native";
import axios from "axios";
import Photos from "./photos";

export default class PhotosFetch extends Component {
  state = {photos: []};

  componentDidMount() {
  }

  fetchPhotos() {
    return this.state.photos.map(photo => {
      return <Photos key={photo.id} photo={photo}/>
    })
  }

  render() {
    return (
      <ScrollView>
        {this.fetchPhotos()}
      </ScrollView>
    )
  }
}