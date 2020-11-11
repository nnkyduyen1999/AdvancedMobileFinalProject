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
          titleStyle={css.authenBtnTitle}
        />
        <Button
          title="Register"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
        />
        <Button
          title="Explore without a subscription"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
        />
      </View>
    </View>
  );
};


export default Login;
