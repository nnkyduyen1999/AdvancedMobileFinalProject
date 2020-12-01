import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, Alert, Text, KeyboardAvoidingView  } from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "./InputText/input-text";
import TextButton from "./InputText/text-button";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import authenticationService from "../../../core/services/authentication-services";
import { AuthenticationContext } from "../../../providers/authentication-provider";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);
  const authenticationContext = useContext(AuthenticationContext);
  const { authentication } = authenticationContext;

  useEffect(() => {
    if (authentication && authentication.statusCode === 200) {
      navigation.navigate(constant.navigationNames.Home);
    } 
  }, [authentication]);
  const renderStatus = (authentication) => {
    if (!authentication) {
      return <></>;
    } else if (authentication.statusCode === 200) {
      return <Text style={{ color: "green" }}>Successfully Login</Text>;
    } else {
      return <Text style={{ color: "red" }}>{authentication.errString}</Text>;
    }
  };
  return (
    <KeyboardAvoidingView style={[css.screenContentNoPaddingTop, { justifyContent: "center" }]}>
      <View style={{ height: 400, justifyContent: "space-around" }}>
        {renderStatus(authentication)}
        <InputCustom
          label="Username"
          placeholder="Email or username"
          iconName="envelope-o"
          textChange={(text) => setUsername(text)}
        />
        <InputCustom
          label="Password"
          placeholder="Password"
          iconName="unlock-alt"
          rightIcon="eye-slash"
          textChange={(text) => setPassword(text)}
        />
        <Button
          title="Sign in"
          buttonStyle={[{ backgroundColor: theme.BASIC_BLUE }]}
          titleStyle={css.authenBtnTitle}
          onPress={() => {
            authenticationContext.setAuthentication(
              authenticationService.login(username, password)
            );
          }}
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
    </KeyboardAvoidingView>
  );
};

export default Login;
