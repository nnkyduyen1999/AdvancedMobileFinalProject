import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import theme from "./src/globals/theme";
import RootStack from "./src/navigations/root-navigation";
import { AuthenticationProvider } from "./src/providers/authentication-provider";
import { CourseProvider } from "./src/providers/course-provider";

const MyTheme = {
  dark: false,
  colors: {
    primary: theme.BASIC_BLUE,
    background: theme.DARK_THEME,
    text: theme.PRIMARY_TEXT_COLOR,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AuthenticationProvider>
        <CourseProvider>
          <RootStack />
        </CourseProvider>
      </AuthenticationProvider>
    </NavigationContainer>
  );
}
