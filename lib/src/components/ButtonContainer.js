import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./ButtonContainer.style";
import FloatingActionButton from "react-native-floating-action-button";

const ButtonContainer = props => {
  const {
    buttonSize,
    videoPlayer,
    heartOnPress,
    fullScreenOnPress,
    heartIconComponent,
    customVideoComponent,
    buttonContainerStyle,
    fullScreenIconComponent
  } = props;
  return (
    <View style={buttonContainerStyle || styles.buttonContainer}>
      <FloatingActionButton
        textDisable
        iconSize={20}
        iconName="heart"
        iconColor="red"
        textColor="red"
        shadowColor="red"
        rippleColor="red"
        size={buttonSize}
        iconType="Foundation"
        onPress={heartOnPress}
        iconComponent={heartIconComponent}
      />
      <FloatingActionButton
        textDisable
        iconSize={25}
        size={buttonSize}
        shadowColor="grey"
        rippleColor="grey"
        iconColor="grey"
        iconName="fullscreen"
        iconType="MaterialCommunityIcons"
        iconComponent={fullScreenIconComponent}
        onPress={() => {
          if (fullScreenOnPress) {
            this.fullScreenOnPress();
          } else {
            if (!customVideoComponent) videoPlayer.presentFullscreenPlayer();
          }
        }}
      />
    </View>
  );
};

ButtonContainer.propTypes = {
  buttonSize: PropTypes.number
};

ButtonContainer.defaultProps = {
  buttonSize: 35
};

export default ButtonContainer;
