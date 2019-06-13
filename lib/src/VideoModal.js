import React, { Component } from "react";
import PropTypes from "prop-types";
import Video from "react-native-video";
import Spinner from "react-native-spinkit";
import { Easing, View } from "react-native";
import Modal from "@paraboly/react-native-modal-box";
import Text from "@freakycoder/react-native-custom-text";
import ButtonContainer from "./components/ButtonContainer";
import styles, {
  container,
  modalContainer,
  _shadowStyle
} from "./VideoModal.style";
import { ScreenWidth, ScreenHeight } from "@freakycoder/react-native-helpers";

class VideoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThumbnail: true
    };
  }

  renderLoadingPoster(props) {
    const { loadingSize, loadingType, loadingColor, loadingIsVisible } = props;
    return (
      <Spinner
        size={loadingSize}
        type={loadingType}
        color={loadingColor}
        style={styles.spinnerStyle}
        isVisible={loadingIsVisible || this.state.showThumbnail}
      />
    );
  }

  renderVideoComponent(props) {
    const { source, resizeMode, ...rest } = props;
    return (
      <Video
        ref={ref => {
          this.videoPlayer = ref;
        }}
        {...rest}
        source={source}
        resizeMode={resizeMode}
        style={styles.videoStyle}
        onError={() => this.setState({ showThumbnail: true })}
        onLoad={() => {
          this.videoPlayer.seek(0);
          this.setState({ showThumbnail: false });
        }}
      />
    );
  }

  render() {
    const {
      title,
      isOpen,
      easing,
      refName,
      onOpened,
      onClosed,
      backdrop,
      textColor,
      fontFamily,
      buttonSize,
      modalWidth,
      titleStyle,
      modalHeight,
      modalBottom,
      coverScreen,
      shadowStyle,
      shadowColor,
      heartOnPress,
      disableButtons,
      backgroundColor,
      buttonsComponent,
      videoPlayerStyle,
      fullScreenOnPress,
      heartIconComponent,
      fullScreenIconComponent,
      customVideoComponent
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
        style={[
          modalContainer(modalWidth, modalHeight, modalBottom),
          shadowStyle || _shadowStyle(shadowColor)
        ]}
      >
        <View style={videoPlayerStyle || container(backgroundColor)}>
          <Text
            color={textColor}
            fontFamily={fontFamily}
            style={titleStyle || styles.titleStyle}
          >
            {title}
          </Text>
          {customVideoComponent || this.renderLoadingPoster(this.props)}
          {customVideoComponent || this.renderVideoComponent(this.props)}
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
  textColor: PropTypes.string,
  resizeMode: PropTypes.string,
  modalWidth: PropTypes.number,
  loadingSize: PropTypes.number,
  modalHeight: PropTypes.number,
  loadingType: PropTypes.string,
  disableButtons: PropTypes.bool,
  loadingColor: PropTypes.string
};

VideoModal.defaultProps = {
  isOpen: true,
  backdrop: true,
  loadingSize: 40,
  modalHeight: 350,
  textColor: "white",
  coverScreen: false,
  loadingColor: "white",
  disableButtons: false,
  resizeMode: "contain",
  easing: Easing.elastic(1),
  modalWidth: ScreenWidth * 0.9,
  loadingType: "FadingCircleAlt",
  modalBottom: { bottom: ScreenHeight * 0.55 }
};

export default VideoModal;
