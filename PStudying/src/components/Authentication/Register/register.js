import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "../Login/InputText/input-text";
import TextButton from "../Login/InputText/text-button";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";

const Register = ({ navigation }) => {
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
        <InputCustom
          label="Retype password"
          placeholder="Password"
          iconName="unlock-alt"
          rightIcon="eye-slash"
        />

        <Button
          title="Sign up"
          buttonStyle={[{ backgroundColor: theme.BASIC_BLUE }]}
          titleStyle={css.authenBtnTitle}
        />
        <TextButton txt="Have an account?" />

        <Button
          title="Sign in"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
          onPress={() =>
            navigation.navigate(constant.navigationNames.Login)
          }
        />
      </View>
    </View>
  );
};

export default Register;
