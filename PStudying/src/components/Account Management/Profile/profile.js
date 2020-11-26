import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import HeadingContent from "../../Common/section-course-title";
import ButtonCategory from "../../Main/Browse/Category/ButtonCategory";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import constant from "../../../globals/constant";
import { AuthenticationContext } from "../../../providers/authentication-provider";

const Profile = ({ navigation }) => {
  const authenticationContext = useContext(AuthenticationContext);
  const {authentication} = authenticationContext;
  if (!authentication) {
    return (
      <ScrollView style={css.screenContent}>
        <View style={{ alignItems: "center" }}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri: `https://i.pinimg.com/originals/3c/77/7a/3c777af381c043c928cc6beaef2dd102.jpg`,
            }}
          />
          <Text style={[css.sectionTitle, { marginVertical: 10 }]}>
            username
          </Text>
        </View>
        <View>
          <HeadingContent sectionTitle="Interested" />
          <ButtonCategory />
          <HeadingContent sectionTitle="Information" />
          <View>
            <Text style={styles.textStyle}>Phone</Text>
            <Input placeholder="Phone here ..." style={styles.infoInput} />
            <Text style={styles.textStyle}>email</Text>
            <Input placeholder="Email here ..." style={styles.infoInput} />
          </View>
          <Button
            title="Login"
            type="outline"
            onPress={() => {
              navigation.navigate(constant.navigationNames.SplashScreen);
            }}
          />
        </View>
      </ScrollView>
    );
  } else {
    const { userInfo } = authentication;
    return (
      <ScrollView style={css.screenContent}>
        <View style={{ alignItems: "center" }}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri: `${userInfo.avatar}`,
            }}
          />
          <Text style={[css.sectionTitle, { marginVertical: 10 }]}>
            {userInfo.name}
          </Text>
        </View>
        <View>
          <HeadingContent sectionTitle="Interested" />
          <ButtonCategory />
          <HeadingContent sectionTitle="Information" />
          <View>
            <Text style={styles.textStyle}>Phone</Text>
            <Input
              placeholder="Phone here ..."
              style={styles.infoInput}
              value={`${userInfo.phone}`}
            />
            <Text style={styles.textStyle}>email</Text>
            <Input
              placeholder="Email here ..."
              style={styles.infoInput}
              value={`${userInfo.email}`}
            />
          </View>
          <Button title="Update info" type="outline" />
        </View>
      </ScrollView>
    );
  }
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
