import React, {useContext} from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import css from "../../../globals/style";
import theme from "../../../globals/theme";
import {ThemeContext} from "../../../providers/theme-provider";

const CustomIcon = ({ iconName, title, onPressIcon, isPressed }) => {
  const {themes} = useContext(ThemeContext);
  const color = isPressed ? theme.BASIC_BLUE : theme.PRIMARY_TEXT_COLOR;

  return (
    <TouchableOpacity style={styles.container}>
      <Icon
        raised
        name={iconName}
        type="font-awesome"
        color={theme.BASIC_GREY}
        reverse={true}
        iconStyle={{color: color}}
        onPress={onPressIcon}
      />
      <Text style={{color: themes.text}}>{title}</Text>
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
