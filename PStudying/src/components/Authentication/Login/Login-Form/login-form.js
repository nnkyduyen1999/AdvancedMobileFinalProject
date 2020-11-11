import React from "react";
import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import css from "../../../../globals/style";
import theme from "../../../../globals/theme";
const LoginForm = () => {
  return (
    <View style={[css.screenContentNoPaddingTop, { justifyContent: "center" }]}>
      <View style={{ height: 400, justifyContent: "space-around" }}>
        <Input
          label="Username"
          labelStyle={css.courseTitle}
          placeholder="Email or username"
          leftIcon={
            <Icon
              name="envelope-o"
              size={20}
              color={theme.SECONDARY_TEXT_COLOR}
            />
          }
        />

        <Input
          label="Password"
          labelStyle={css.courseTitle}
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={
            <Icon
              name="unlock-alt"
              size={24}
              color={theme.SECONDARY_TEXT_COLOR}
            />
          }
          rightIcon={
            <Icon
              name="eye-slash"
              size={24}
              color={theme.SECONDARY_TEXT_COLOR}
            />
          }
        />
        <Button
          title="Sign in"
          buttonStyle={[{ backgroundColor: theme.BASIC_BLUE }]}
          titleStyle={css.authenBtnTitle}
        />
        <Text
          style={{
            color: theme.BASIC_BLUE,
            fontSize: theme.FONT_SIZE_SMALL,
            textAlign: "center",
            paddingVertical: 10
          }}
        >
          Need help?
        </Text>

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
