import React, {Component} from "react";
import {View, Text} from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = {
  headerContainer: {
    backgroundColor: "#fafbfc",
    paddingTop: 24,
    alignItems: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 2
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 13
  }
};