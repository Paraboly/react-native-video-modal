import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import VideoModal from "./lib/src/VideoModal";

const source = {
  uri:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
};

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <VideoModal title="Test Video Stream" source={source} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
