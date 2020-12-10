import React, { useContext, useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import HeadingContent from "../../Common/section-course-title";
import ButtonCategory from "../../Main/Browse/Category/ButtonCategory";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import { AuthenticationContext } from "../../../providers/authentication-provider";
import userServices from "../../../core/services/user-services";

const Profile = ({ navigation }) => {
  const authenticationContext = useContext(AuthenticationContext);
  const { userInfo } = authenticationContext.state;

  const [name, setName] = useState(userInfo.name);
   const [phone, setPhone] = useState(userInfo.phone);

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={css.screenContent}>
            <View style={{ alignItems: "center" }}>
              {!userInfo.avatar && (
                <Avatar
                  size="xlarge"
                  rounded
                  source={{
                    uri: `https://i.pinimg.com/originals/3c/77/7a/3c777af381c043c928cc6beaef2dd102.jpg`,
                  }}
                />
              )}
              {userInfo.avatar && (
                <Avatar
                  size="xlarge"
                  rounded
                  source={{
                    uri: `${userInfo.avatar}`,
                  }}
                />
              )}

              <Text style={[css.sectionTitle, { marginVertical: 10 }]}>
                {userInfo.type}
              </Text>
            </View>
            <View>
              <HeadingContent sectionTitle="Interested" />
              <ButtonCategory />
              <HeadingContent sectionTitle="Information" />
              <View>
                <Text style={styles.textStyle}>Name</Text>
                <Input
                  placeholder="Name here ..."
                  style={styles.infoInput}
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
                <Text style={styles.textStyle}>Phone</Text>
                <Input
                  placeholder="Phone here ..."
                  style={styles.infoInput}
                  value={phone}
                  onChangeText={(text) => setPhone(text)}
                />
                <Text style={styles.textStyle}>email</Text>
                <Input
                  placeholder="Email here ..."
                  style={styles.infoInput}
                  value={`${userInfo.email}`}
                />
              </View>
              <Button
                title="Update info"
                type="outline"
                onPress={() => {
                  authenticationContext.setAuthentication(
                    userServices.updateInfo(name, phone)
                  );
                  if (authentication && authentication.statusCode === 200) {
                    Alert.alert("Successfully updated info");
                  }
                }}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
  textStyle: {
    color: theme.SECONDARY_TEXT_COLOR,
    textTransform: "uppercase",
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
  infoInput: {
    color: theme.PRIMARY_TEXT_COLOR,
    fontSize: theme.FONT_SIZE_SMALL,
  },
});

export default Profile;
