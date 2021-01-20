import React, { useContext, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { Button } from "react-native-elements";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import { ThemeContext } from "../../../providers/theme-provider";

const SplashScreen = ({ navigation }) => {
  const { themes } = useContext(ThemeContext);

  return (
    <View style={[css.screenContentNoPaddingTop, { justifyContent: "center" }]}>
      <Image
        source={require("../../../../assets/playstation.png")}
        style={{ alignSelf: "center" }}
      />
      <View style={{ justifyContent: "space-around", height: 250 }}>
        <Text
          style={{
            alignSelf: "center",
            color: themes.text,
            fontWeight: "bold",
            fontSize: 32,
            textTransform: "uppercase",
            marginVertical: 10,
            fontFamily: "Chalkduster",
          }}
        >
          PStudying
        </Text>
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
