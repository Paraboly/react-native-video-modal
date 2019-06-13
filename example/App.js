import React, { Component } from "react";
import { View, WebView } from "react-native";
import FastImage from "react-native-fast-image";
import VideoModal from "@paraboly/react-native-video-modal";

const logo = require("./assets/parabol_logo.png");

const source = {
  uri:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
};

export default class App extends Component {
  renderWebview() {
    return (
      <View style={{ width: "100%", height: 200 }}>
        <WebView
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          source={{
            uri: "your-stream-url"
          }}
          style={{ width: "100%", height: "100%", marginTop: 24 }}
        />
      </View>
    );
  }

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
        <VideoModal
          source={source}
          title="Test Video Stream"
          customVideoComponent={this.renderWebview()}
        />
      </View>
    );
  }
}
