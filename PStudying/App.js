import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import theme from "./src/globals/theme";
import MainModals from "./src/navigations/ModalsNav/main-modals"
import  {AuthenticationProvider}  from "./src/providers/authentication-provider";

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
        <MainModals />
      </AuthenticationProvider>
    </NavigationContainer>
  );
}
