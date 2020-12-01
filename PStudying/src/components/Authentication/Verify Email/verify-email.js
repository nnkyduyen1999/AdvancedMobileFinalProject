import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "../Login/InputText/input-text";
import TextButton from "../Login/InputText/text-button";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import authenticationServices from "../../../core/services/authentication-services"

const VerifyEmail = ({navigation}) => {
  const [token, setToken] = useState(``);
  const [status, setStatus] = useState();

  const renderStatus = (status) => {
    if (!status) {
      return <></>;
    } else if (status && status.statusCode === 200) {
      return <Text style={{ color: "green" }}>Email verify successful.</Text>
    } else {
      return <Text style={{ color: "red" }}>{status.errString}</Text>;
    }
  }

  useEffect(() => {
    if (status && status.statusCode === 200) {
      navigation.navigate(constant.navigationNames.Login);
    }
  })

  return (
    <View style={[css.screenContentNoPaddingTop, { justifyContent: "center" }]}>
      <View style={{ height: 400, justifyContent: "space-around" }}>
        {renderStatus(status)}
        <InputCustom
          label="Verify Code"
          placeholder="Verify code"
          iconName="key"
          textChange={(text) =>setToken(text)}
        />
        <Button
          title="Verify"
          buttonStyle={[{ backgroundColor: theme.BASIC_BLUE }]}
          titleStyle={css.authenBtnTitle}
          onPress={() => {
              setStatus(authenticationServices.verifyEmail(token));
          }}
        />
        <TextButton txt="Haven't received an email?" />

        <Button
          title="Resend email"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
          onPress={() => {
            navigation.navigate(constant.navigationNames.SplashScreen);
          }}
        />
      </View>
    </View>
  );
};

export default VerifyEmail;
