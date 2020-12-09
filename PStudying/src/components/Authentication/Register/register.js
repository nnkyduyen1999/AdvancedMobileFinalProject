import React, { useContext, useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text
} from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "../Login/InputText/input-text";
import TextButton from "../Login/InputText/text-button";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import authenticationService from "../../../core/services/authentication-services";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);
  const [password, setPassword] = useState(``);
  const [status, setStatus] = useState();

  const renderStatus = (status) => {
    if (!status) {
      return <></>;
    } else if ((status === status.statusCode) === 200) {
      return <Text style={{ color: "green" }}>Successfully register.</Text>;
    } else {
      return <Text style={{ color: "red" }}>{status.errString}</Text>;
    }
  };

  useEffect(() => {
    if (status && status.statusCode === 200) {
      navigation.navigate(constant.navigationNames.VerifyEmail);
    }
  }, [status]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[css.screenContentNoPaddingTop, { justifyContent: "center" }]}
        >
          <View style={{ justifyContent: "space-around" }}>
            {renderStatus(status)}
            <InputCustom
              label="Username"
              placeholder="Username"
              iconName="envelope-o"
              textChange={(text) => setUsername(text)}
            />
            <InputCustom
              label="Email"
              placeholder="Email"
              iconName="envelope-o"
              textChange={(text) => setEmail(text)}
            />
            <InputCustom
              label="Phone"
              placeholder="Phone"
              iconName="phone"
              textChange={(text) => setPhone(text)}
            />
            <InputCustom
              label="Password"
              placeholder="Password"
              iconName="unlock-alt"
              rightIcon="eye-slash"
              textChange={(text) => setPassword(text)}
            />

            <Button
              title="Sign up"
              buttonStyle={[{ backgroundColor: theme.BASIC_BLUE }]}
              titleStyle={css.authenBtnTitle}
              onPress={() => {
                setStatus(
                  authenticationService.register(
                    username,
                    email,
                    phone,
                    password
                  )
                );
              }}
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
