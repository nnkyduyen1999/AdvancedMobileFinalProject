import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "../InputText/input-text";
import css from "../../../../globals/style";
import theme from "../../../../globals/theme";
const ChangePasswordForm = () => {
  return (
    <View style={[css.screenContent, { justifyContent: "center" }]}>
      <View style={{ height: 400, justifyContent: "space-around" }}>
        <InputCustom
          label="Current password"
          placeholder="Current password"
          iconName="unlock-alt"
          rightIcon="eye-slash"
        />
        <InputCustom
          label="New password"
          placeholder="New password"
          iconName="unlock-alt"
          rightIcon="eye-slash"
        />

        <Button
          title="Cancel"
          buttonStyle={[{ backgroundColor: theme.BASIC_BLUE }]}
          titleStyle={css.authenBtnTitle}
        />
        <Button
          title="Confirm"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
        />
      </View>
    </View>
  );
};

export default ChangePasswordForm;
