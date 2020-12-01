import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import theme from "../../../../globals/theme";
import css from "../../../../globals/style";
const InputCustom = ({ label, placeholder, iconName, rightIcon, textChange }) => {
  return (
    <>
      {!rightIcon && (
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
          inputStyle={{ color: theme.PRIMARY_TEXT_COLOR }}
          onChangeText={textChange}
        />
      )}

      {rightIcon && (
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
          inputStyle={{ color: theme.PRIMARY_TEXT_COLOR }}
          onChangeText={textChange}
        />
      )}
    </>
  );
};

export default InputCustom;
