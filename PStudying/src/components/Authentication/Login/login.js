import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
const Login = () => {
  return (
    <View style={[css.screenContentNoPaddingTop, { justifyContent: "center" }]}>
      <Image
        source={require("../../../../assets/logo.png")}
        style={{ width: 300, height: 200, alignSelf: "center" }}
      />
      <View style={{ justifyContent: "space-around", height: 200 }}>
        <Button
          title="Sign in"
          buttonStyle={{ backgroundColor: theme.BASIC_BLUE }}
          titleStyle={{
            fontSize: theme.FONT_SIZE_MEDIUM,
            fontWeight: theme.FONT_WEIGHT_MEDIUM,
          }}
        />
        <Button
          title="Subcribe to PluralSight"
          type="outline"
          titleStyle={styles.text}
        />
        <Button
          title="Explore without a subcription"
          type="outline"
          titleStyle={styles.text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.BASIC_BLUE,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
});

export default Login;
