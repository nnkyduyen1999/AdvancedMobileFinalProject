import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "../InputText/input-text";
import TextButton from "../InputText/text-button";
import css from "../../../../globals/style";
import theme from "../../../../globals/theme";
const LoginForm = () => {
  return (
    <View style={[css.screenContentNoPaddingTop, { justifyContent: "center" }]}>
      <View style={{ height: 400, justifyContent: "space-around" }}>
        <InputCustom
          label="Username"
          placeholder="Email or username"
          iconName="envelope-o"
        />
        <InputCustom
          label="Password"
          placeholder="Password"
          iconName="unlock-alt"
          rightIcon="eye-slash"
        />
        <Button
          title="Sign in"
          buttonStyle={[{ backgroundColor: theme.BASIC_BLUE }]}
          titleStyle={css.authenBtnTitle}
        />

        <TextButton txt="Need a help?" />
        <Button
          title="Use Single Signin-On (SSO)"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
        />
        <Button
          title="Subcribe to PStudying"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
        />
      </View>
    </View>
  );
};

export default LoginForm;
