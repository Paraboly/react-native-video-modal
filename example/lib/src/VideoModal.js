import React, { Component } from "react";
import PropTypes from "prop-types";
import Video from "react-native-video";
import { Easing, View } from "react-native";
import Modal from "@paraboly/react-native-modal-box";
import Text from "@freakycoder/react-native-custom-text";
import styles, { modalContainer } from "./VideoModal.style";
import ButtonContainer from "./components/ButtonContainer";
import { ScreenWidth, ScreenHeight } from "@freakycoder/react-native-helpers";

const source = {
  uri:
    "https://tkmlive.konya.bel.tr/streams/hls/707/750d10c4-b63e-4e34-a1ff-b55b0250a7d0.m3u8",
  type: "m3u8"
};
const source2 = {
  uri:
    "https://tkmlive.konya.bel.tr/streams/hls/710/ae595306-ab6e-4253-8d19-83ccc3887b94.m3u8",
  type: "m3u8"
};

class VideoModal extends Component {
  render() {
    const {
      title,
      isOpen,
      source,
      easing,
      refName,
      onOpened,
      onClosed,
      backdrop,
      textColor,
      fontFamily,
      buttonSize,
      resizeMode,
      modalWidth,
      titleStyle,
      videoPlayer,
      modalHeight,
      modalBottom,
      coverScreen,
      heartOnPress,
      disableButtons,
      buttonsComponent,
      videoPlayerStyle,
      fullScreenOnPress,
      heartIconComponent,
      fullScreenIconComponent,
      ...rest
    } = this.props;
    return (
      <Modal
        ref={refName}
        isOpen={isOpen}
        easing={easing}
        onOpened={onOpened}
        onClosed={onClosed}
        backdrop={backdrop}
        coverScreen={coverScreen}
        style={modalContainer(modalWidth, modalHeight, modalBottom)}
      >
        <View style={videoPlayerStyle || styles.container}>
          <Text
            fontFamily={fontFamily}
            color={textColor || "white"}
            style={titleStyle || styles.titleStyle}
          >
            {title}
          </Text>
          <Video
            ref={ref => {
              this.videoPlayer = ref;
            }}
            source={source}
            resizeMode={resizeMode}
            style={styles.videoStyle}
            {...rest}
          />
        </View>
        {!disableButtons &&
          (buttonsComponent || (
            <ButtonContainer
              buttonSize={buttonSize}
              heartOnPress={heartOnPress}
              videoPlayer={this.videoPlayer}
              fullScreenOnPress={fullScreenOnPress}
              heartIconComponent={heartIconComponent}
              fullScreenIconComponent={fullScreenIconComponent}
            />
          ))}
      </Modal>
    );
  }
}

VideoModal.propTypes = {
  isOpen: PropTypes.bool,
  backdrop: PropTypes.bool,
  coverScreen: PropTypes.bool,
  modalWidth: PropTypes.number,
  modalHeight: PropTypes.number,
  resizeMode: PropTypes.string
};

VideoModal.defaultProps = {
  isOpen: true,
  backdrop: true,
  modalHeight: 350,
  coverScreen: false,
  resizeMode: "contain",
  easing: Easing.elastic(1),
  modalWidth: ScreenWidth * 0.9,
  modalBottom: { bottom: ScreenHeight * 0.55 }
};

export default VideoModal;
