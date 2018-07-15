import React, {Component} from "react";
import {ScrollView} from "react-native";
import {connect} from "react-redux"
import {fetchPhotos} from "../actions/PhotoActions"
import Photos from "./photos";

class PhotosFetch extends Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  displayPhotos() {
    return this.props.photos.map(photo => {
      return <Photos key={photo.id} photo={photo}/>
    })
  }

  render() {
    return (
      <ScrollView>
        {this.displayPhotos()}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos,
  };
};

export default connect(mapStateToProps, {fetchPhotos})(PhotosFetch);
