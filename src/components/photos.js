import React from "react";
import {View, Image, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

const Photos = ({photo}) => {
  const {user_avatar, username, image, caption} = photo;
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
          source={{uri: user_avatar}}
          style={avatarStyle}
        />
        <View style={avatarContainerTextStyle}>
          <Text>{username}</Text>
        </View>
      </View>
      <View>
        <Image
          source={{uri: image}}
          style={mainImageStyle}
        />
      </View>
      <View style={iconContainerStyle}>
        <Icon
          name="ios-heart-outline"
          size={30}
        />
      </View>
      <View style={footerStyle}>
        <Text style={footerTextStyle}>{username}</Text>
        <Text>{caption}</Text>
      </View>
    </View>
  )
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

export default Photos;