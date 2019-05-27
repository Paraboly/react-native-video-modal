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

export default {
  container: {
    height: 230,
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "black"
  },
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
  buttonContainer: {
    right: 0,
    bottom: 66,
    width: 125,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-evenly"
  }
};
