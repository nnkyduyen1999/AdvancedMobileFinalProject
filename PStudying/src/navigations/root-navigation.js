import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import constant from "../globals/constant";
import theme from "../globals/theme";
import MainModals from "./ModalsNav/main-modals";
import FullSection from "../components/Main/Home/SectionFullList/section-full-list";

export default RootStack = () => {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        component={MainModals}
        name={constant.navigationNames.MainModals}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        component={FullSection}
        name={constant.navigationNames.FullSection}
        options={{
          title: "",
          headerLeft: (props) => (
            <Button
              {...props}
              title="Back"
              type="clear"
              icon={{
                name: "chevron-left",
                size: 25,
                color: theme.BASIC_BLUE,
              }}
            />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};
