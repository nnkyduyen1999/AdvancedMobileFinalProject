import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "../InputText/input-text";
import TextButton from "../InputText/text-button";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
const VerifyPassword = () => {
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
        />
      </View>
    </View>
  );
};

export default VerifyPassword;
