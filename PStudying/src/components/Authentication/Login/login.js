import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "./InputText/input-text";
import TextButton from "./InputText/text-button";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";

const LoginForm = ({ navigation }) => {
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

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(constant.navigationNames.ForgotPassword)
          }
        >
          <TextButton txt="Forget password?" />
        </TouchableOpacity>
        <Button
          title="Use Single Signin-On (SSO)"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
        />
        <Button
          title="Cancel"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default LoginForm;
