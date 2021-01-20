import React, { useContext } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import theme from "./src/globals/theme";
import RootStack from "./src/navigations/root-navigation";
import { AuthenticationProvider } from "./src/providers/authentication-provider";
import { CourseProvider } from "./src/providers/course-provider";
import { ThemeProvider, ThemeContext } from "./src/providers/theme-provider";

function MyNavigation() {
  const { themes } = useContext(ThemeContext);

  const MyTheme = {
    dark: false,
    colors: {
      primary: theme.BASIC_BLUE,
      background: themes.backgroundColor,
      text: themes.text,
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <CourseProvider>
          <MyNavigation />
        </CourseProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
