import React, { Component } from "react";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
// import VideoModal from "@paraboly/react-native-video-modal";
import VideoModal from "./lib/src/VideoModal";

const logo = require("./assets/parabol_logo.png");

const source = {
  uri:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
};

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ top: 128, alignItems: "center", justifyContent: "center" }}
        >
          <FastImage
            source={logo}
            resizeMode="contain"
            style={{ width: 300, height: 100 }}
          />
        </View>

        <VideoModal title="Test Video Stream" source={source} />
      </View>
    );
  }
}
