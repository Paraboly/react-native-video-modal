import React, { Component } from "react";
import PropTypes from "prop-types";
import Video from "react-native-video";
import { Easing, View } from "react-native";
import Modal from "@paraboly/react-native-modal-box";
import Text from "@freakycoder/react-native-custom-text";
import ButtonContainer from "./components/ButtonContainer";
import Spinner from "react-native-spinkit";
import styles, { container, modalContainer } from "./VideoModal.style";
import { ScreenWidth, ScreenHeight } from "@freakycoder/react-native-helpers";

const sourceURI = {
  uri: "https://loading.io/spinners/gooey-ball-2/lg.gooey-ball-lodaer.gif"
};
const sourceTest = {
  uri:
    "https://tkmlive.konya.bel.tr/streams/hls/710/ae595306-ab6e-4253-8d19-83ccc3887b94.m3u8",
  type: "m3u8"
};

class VideoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThumbnail: true
    };
  }

  renderLoadingPoster() {
    return (
      <Spinner
        style={{
          marginTop: 64,
          alignSelf: "center",
          justifyContent: "center"
        }}
        size={60}
        type="Pulse"
        color="white"
        isVisible={this.state.showThumbnail}
      />
    );
  }

  render() {
    const {
      title,
      source,
      isOpen,
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
      modalHeight,
      modalBottom,
      coverScreen,
      heartOnPress,
      disableButtons,
      backgroundColor,
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
        <View style={videoPlayerStyle || container(backgroundColor)}>
          <Text
            fontFamily={fontFamily}
            color={textColor || "white"}
            style={titleStyle || styles.titleStyle}
          >
            {title}
          </Text>

          {this.renderLoadingPoster()}
          <Video
            style={!this.state.showThumbnail ? { display: "flex" } : undefined}
            ref={ref => {
              this.videoPlayer = ref;
            }}
            source={sourceTest}
            resizeMode={resizeMode}
            style={styles.videoStyle}
            onLoad={() => {
              this.videoPlayer.seek(0);
              this.setState({ showThumbnail: false });
            }}
            onError={() => this.setState({ showThumbnail: true })}
            hideShutterView={true}
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
  resizeMode: PropTypes.string,
  modalHeight: PropTypes.number,
  disableButtons: PropTypes.bool
};

VideoModal.defaultProps = {
  isOpen: true,
  backdrop: true,
  modalHeight: 350,
  coverScreen: false,
  disableButtons: false,
  resizeMode: "contain",
  easing: Easing.elastic(1),
  modalWidth: ScreenWidth * 0.9,
  modalBottom: { bottom: ScreenHeight * 0.55 }
};

export default VideoModal;
