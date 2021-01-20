import React, {useState} from "react";
import { View, Text, Alert } from "react-native";
import { Button } from "react-native-elements";
import InputCustom from "../Login/InputText/input-text";
import TextButton from "../Login/InputText/text-button";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import authenticationService from "../../../core/services/authentication-services";

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState(``);
  const [status, setStatus] = useState();

  const renderStatus = (status) => {
    if (!status) {
      return <></>;
    } else if (status && status.statusCode === 200) {
      return <Text style={{ color: "red" }}>{status.message}</Text>
    } else {
    return <Text style={{ color: "green" }}>{status.message}</Text>
    }
  }

  const handleForgetPassword = (email) => {
    authenticationService.forgetPasswordService(email)
    .then(res => {
      if (res.status === 200) {
        setStatus(res.data);
        Alert.alert("Vui lòng kiểm tra email và đăng nhập lại");
        navigation.navigate(constant.navigationNames.Login);
      } 
    }).catch(err => {
      setStatus(err.response.data);
    })
  }
  
  return (
    <View style={[css.screenContentNoPaddingTop, { justifyContent: "center" }]}>
      <View style={{ height: 350, justifyContent: "space-around" }}>
        {renderStatus(status)}
        <InputCustom
          label="Email"
          placeholder="Email"
          iconName="envelope-o"
          textChange={(text) => setEmail(text)}
        />
        
        <Button
          title="Send email"
          buttonStyle={[{ backgroundColor: theme.BASIC_BLUE }]}
          titleStyle={css.authenBtnTitle}
          onPress={() => {
            handleForgetPassword(email);
          }}
        />
        <TextButton txt="Haven't received an email?" />

        <Button
          title="Back"
          type="outline"
          titleStyle={css.authenBtnTitleOutline}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default ForgetPassword;
