import React, { useState } from "react";
import { Icon, Divider } from "react-native-elements";
import { View, TouchableOpacity, Text, Switch } from "react-native";
import css from "../../globals/style";
import theme from "../../globals/theme";
const ListItemWithRightIcon = ({ setting, rightIcon, switchBtn }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 5,
          flex: 1
        }}
      >
        <View style={{flex: 2}}>
          <Text
            style={{
              color: theme.PRIMARY_TEXT_COLOR,
              fontSize: theme.FONT_SIZE_XLARGE,
            }}
          >
            {setting.main}
          </Text>
          {setting.sub !== "" && (
            <Text style={css.courseContent}>{setting.sub}</Text>
          )}
        </View>
        {!switchBtn && (
          <Icon
            name={rightIcon}
            type="font-awesome"
            color={theme.PRIMARY_TEXT_COLOR}
          />
        )}
        {switchBtn && (
          <Switch
            trackColor={{ false: theme.BASIC_GREY, true: theme.BASIC_BLUE }}
            thumbColor={theme.PRIMARY_TEXT_COLOR}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        )}
      </TouchableOpacity>
      <Divider style={css.divider} />
    </View>
  );
};

export default ListItemWithRightIcon;
