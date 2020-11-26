import React, {useState} from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "../Login/InputText/input-text";
import TextButton from "../Login/InputText/text-button";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import authenticationService from "../../../core/services/authentication-services";

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState(``);
  const [status, setStatus] = useState();

  const renderStatus = (status) => {
    if (!status) {
      return <></>;
    } else if (status && status.statusCode === 200) {
      return <Text style={{ color: "red" }}>Sent email.</Text>
    } else {
    return <Text style={{ color: "red" }}>{status.errString}</Text>
    }
  }
  return (
    <View style={[css.screenContentNoPaddingTop, { justifyContent: "center" }]}>
      <View style={{ height: 400, justifyContent: "space-around" }}>
        {renderStatus(status)}
        <InputCustom
          label="Email"
          placeholder="Email"
          iconName="envelope-o"
          textChange={(text) => setEmail(text)}
        />
        {/* <InputCustom
          label="Verify Code"
          placeholder="Verify code"
          iconName="key"
        /> */}
        <Button
          title="Verify"
          buttonStyle={[{ backgroundColor: theme.BASIC_BLUE }]}
          titleStyle={css.authenBtnTitle}
          onPress={() => {
            setStatus(authenticationService.forgetPassword(email));
          }}
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
