import React, {useContext} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import theme from "../../../../globals/theme";
import css from "../../../../globals/style";
import {ThemeContext} from "../../../../providers/theme-provider";

const InputCustom = ({
  label,
  placeholder,
  iconName,
  rightIcon,
  textChange,
}) => {
  const { themes } = useContext(ThemeContext);
  return (
    <>
      {!rightIcon ? (
        <Input
          label={label}
          labelStyle={css.courseTitle}
          placeholder={placeholder}
          secureTextEntry={false}
          leftIcon={
            <Icon
              name={iconName}
              size={20}
              color={theme.SECONDARY_TEXT_COLOR}
            />
          }
          inputStyle={{ color: themes.text }}
          onChangeText={textChange}
        />
      ) : (
        <Input
          label={label}
          labelStyle={css.courseTitle}
          placeholder={placeholder}
          secureTextEntry={true}
          leftIcon={
            <Icon
              name={iconName}
              size={24}
              color={theme.SECONDARY_TEXT_COLOR}
            />
          }
          rightIcon={
            <Icon
              name={rightIcon}
              size={24}
              color={theme.SECONDARY_TEXT_COLOR}
            />
          }
          inputStyle={{ color: themes.text }}
          onChangeText={textChange}
        />
      )}
    </>
  );
};

export default InputCustom;
