import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
  View
} from "react-native";
import css from "../../globals/style";

const ImageButton = ({ txt, imgName, imgType, onPressImgBtn}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressImgBtn}>
      <ImageBackground
        style={imgType}
        source={require("../../../assets/new-release.jpg")}
      >
        <View style={styles.overlay}>
          <Text style={css.imgBtnText}>{txt}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageButton;
