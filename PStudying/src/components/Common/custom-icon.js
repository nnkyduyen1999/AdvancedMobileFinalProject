import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import css from "../../globals/style";
import theme from "../../globals/theme";
const CustomIcon = ({ iconName, title }) => {
  const onPressIcon = () => {
    console.log("cliekc");
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Icon
        raised
        name={iconName}
        type="font-awesome"
        color={theme.BASIC_GREY}
        reverse={true}
        onPress={onPressIcon}
      />
      <Text style={{color: theme.PRIMARY_TEXT_COLOR}}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default CustomIcon;
