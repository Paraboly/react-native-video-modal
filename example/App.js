import React, { Component } from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import FastImage from "react-native-fast-image";
// import VideoModal from "@paraboly/react-native-video-modal";
import VideoModal from "./lib/src/VideoModal";

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
          source={source}
          useWebKit={true}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          originWhitelist={["*"]}
          allowsInlineMediaPlayback={true}
          style={{ width: "100%", height: "100%", marginTop: 24 }}
        />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            marginTop: "30%",
            alignItems: "center",
            justifyContent: "center"
          }}
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
          // customVideoComponent={this.renderWebview()}
        />
      </SafeAreaView>
    );
  }
}
