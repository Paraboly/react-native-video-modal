import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

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
        iconColor="red"
        textColor="red"
        shadowColor="red"
        rippleColor="red"
        size={buttonSize}
        iconType="AntDesign"
        onPress={heartOnPress}
        iconComponent={heartIconComponent}
      />
      <FloatingActionButton
        textDisable
        size={buttonSize}
        shadowColor="grey"
        rippleColor="grey"
        iconType="Octicons"
        iconName="screen-full"
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
