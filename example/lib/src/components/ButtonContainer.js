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
    heartIconComponent,
    fullScreenIconComponent,
    fullScreenOnPress
  } = props;
  return (
    <View style={styles.buttonContainer}>
      <FloatingActionButton
        textDisable
        iconName="heart"
        iconSize={23}
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
        iconSize={28}
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
            videoPlayer.presentFullscreenPlayer();
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
  buttonSize: 40
};

export default ButtonContainer;
