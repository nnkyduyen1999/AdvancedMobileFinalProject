import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import HeadingContent from "../../../Common/section-course-title";
import ButtonCategory from "../../../Main/Browse/Category/ButtonCategory";
import css from "../../../../globals/style";
import theme from "../../../../globals/theme";

const AuthorProfile = ({ route }) => {
  const authorInfo = route.params.authorInfo;
  return (
    <ScrollView style={css.screenContent}>
      <View style={{ alignItems: "center" }}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: `${authorInfo.avatar}`,
          }}
        />
        <Text style={[css.sectionTitle, { marginVertical: 10 }]}>
          {authorInfo.name}
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
          <Input placeholder="Email here ..." style={styles.infoInput} />
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

export default AuthorProfile;
