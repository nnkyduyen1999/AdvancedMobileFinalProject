import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import HeadingContent from "../../Common/section-course-title";
import ButtonCategory from "../../Main/Browse/Category/ButtonCategory";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import { AuthenticationContext } from "../../../providers/authentication-provider";

const Profile = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const userInfo = authenticationContext.authentication.user;
  return (
    <ScrollView style={css.screenContent}>
      <View style={{ alignItems: "center" }}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              "https://i.pinimg.com/originals/3c/77/7a/3c777af381c043c928cc6beaef2dd102.jpg",
          }}
        />
        <Text style={[css.sectionTitle, { marginVertical: 10 }]}>
          {userInfo.fullName}
        </Text>
      </View>
      <View>
        <HeadingContent sectionTitle="Interested" />
        <ButtonCategory />
        <HeadingContent sectionTitle="Information" />
        <View>
          <Text style={styles.textStyle}>quote</Text>
          <Input placeholder="Some quote here ..." style={styles.infoInput} />
          <Text style={styles.textStyle}>email</Text>
          <Input
            placeholder="Email here ..."
            style={styles.infoInput}
            value={`${userInfo.username}`}
          />
        </View>
        <Button title="Update info" type="outline" />
      </View>
    </ScrollView>
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
