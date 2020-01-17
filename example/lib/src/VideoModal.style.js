export function modalContainer(modalWidth, modalHeight, modalBottom) {
  return {
    ...modalBottom,
    width: modalWidth,
    height: modalHeight,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  };
}

export function _shadowStyle(shadowColor) {
  return {
    shadowColor: shadowColor,
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.38,
    shadowRadius: 16.0,

    elevation: 24
  };
}

export function container(backgroundColor) {
  return {
    height: 230,
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: backgroundColor || "black"
  };
}

export default {
  modalContent: {
    flex: 1,
    backgroundColor: "white"
  },
  buttonContainer: {
    flex: 1,
    right: 8,
    elevation: 10,
    alignSelf: "flex-end"
  },
  titleStyle: {
    top: 16,
    left: 16
  },
  videoStyle: {
    height: 240,
    marginTop: 5,
    width: "100%",
    backgroundColor: "transparent"
  },
  spinnerStyle: {
    marginTop: 72,
    alignSelf: "center",
    justifyContent: "center"
  }
};
