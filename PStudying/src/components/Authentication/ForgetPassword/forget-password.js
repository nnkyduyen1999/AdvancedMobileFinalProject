import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "../Login/InputText/input-text";
import TextButton from "../Login/InputText/text-button";
import css from "../../../globals/style";
import theme from "../../../globals/theme";

const ForgetPassword = ({navigation}) => {
  return (
    <View style={[css.screenContentNoPaddingTop, { justifyContent: "center" }]}>
      <View style={{ height: 400, justifyContent: "space-around" }}>
        <InputCustom
          label="Email"
          placeholder="Email"
          iconName="envelope-o"
        />
        <InputCustom
          label="Verify Code"
          placeholder="Verify code"
          iconName="key"
        />
        <Button
          title="Verify"
          buttonStyle={[{ backgroundColor: theme.BASIC_BLUE }]}
          titleStyle={css.authenBtnTitle}
        />
        <TextButton txt="Haven't received an email?" />

        <Button
          title="Resend email"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default ForgetPassword;
