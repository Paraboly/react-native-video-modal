import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import VideoModal from "./lib/src/VideoModal";

const source2 = {
  uri:
    "https://tkmlive.konya.bel.tr/streams/hls/710/ae595306-ab6e-4253-8d19-83ccc3887b94.m3u8",
  type: "m3u8"
};

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>HELLO</Text>
        <VideoModal title="Test Video Stream" source={source2} />
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
