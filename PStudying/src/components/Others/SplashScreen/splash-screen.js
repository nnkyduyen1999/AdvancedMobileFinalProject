import React, { useContext, useEffect } from "react";
import { View, Image } from "react-native";
import { Button } from "react-native-elements";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";

const SplashScreen = ({ navigation }) => {
  
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
          onPress={() => {
            navigation.navigate(constant.navigationNames.Login);
          }}
        />
        <Button
          title="Register"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
          onPress={() => navigation.navigate(constant.navigationNames.Register)}
        />
        <Button
          title="Login with Google"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
