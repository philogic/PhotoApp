import React, {Component} from "react";
import {View, Image, Text, TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

export default class Photos extends Component {
  constructor() {
    super();

    this.like = false;
    this.state = {heartIcon: "ios-heart-outline"}
  }

  toggleLike() {
    this.like = !this.like;

    if (this.like) {
      this.setState({heartIcon: "ios-heart"})
    }
    else {
      this.setState({heartIcon: "ios-heart-outline"})
    }
  }
  render() {
    const {
      container,
      avatarContainerStyle,
      avatarContainerTextStyle,
      avatarStyle,
      mainImageStyle,
      iconContainerStyle,
      footerStyle,
      footerTextStyle
    } = styles;
    return (
      <View style={container}>
        <View style={avatarContainerStyle}>
          <Image
            source={{uri: this.props.photo.user_avatar}}
            style={avatarStyle}
          />
          <View style={avatarContainerTextStyle}>
            <Text>{this.props.photo.username}</Text>
          </View>
        </View>
        <View>
          <Image
            source={{uri: this.props.photo.image}}
            style={mainImageStyle}
          />
        </View>
        <View style={iconContainerStyle}>
          <TouchableWithoutFeedback onPress={this.toggleLike.bind(this)}>
            <Icon
            name={this.state.heartIcon}
            size={30}
            style={{color: this.state.heartIcon === "ios-heart" ? "red" : "black"}}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={footerStyle}>
          <Text style={footerTextStyle}>{this.props.photo.username}</Text>
          <Text>{this.props.photo.caption}</Text>
        </View>
      </View>
    )
  }
};

const styles = {
  container: {
    margin: 10
  },
  avatarContainerStyle: {
    flexDirection: "row",
    padding: 5,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  },
  avatarContainerTextStyle: {
    justifyContent: "center",
    padding: 5
  },
  avatarStyle: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  mainImageStyle: {
    width: null,
    height: 400
  },
  iconContainerStyle: {
    paddingTop: 5,
    paddingBottom: 5
  },
  footerStyle: {
    flexDirection: "row",
  },
  footerTextStyle: {
    paddingRight: 5,
    fontWeight: "bold"
  }
};

