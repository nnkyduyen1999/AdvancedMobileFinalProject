import React, { useState } from "react";
import theme from "../globals/theme";

const ThemeContext = React.createContext();

const pallete = {
  light: {
    backgroundColor: theme.LIGHT_THEME,
    text: theme.PRIMARY_TEXT_COLOR_LIGHT,
    courseBgr: theme.COURSE_ITEM_BGR_LIGHT,
    tabBarBgr: theme.TAB_BAR_BGR_LIGHT,
    radiusBtn: theme.RADIUS_BTN_BGR_LIGHT
  },
  dark: {
    backgroundColor: theme.DARK_THEME,
    text: theme.PRIMARY_TEXT_COLOR,
    courseBgr: theme.COURSE_ITEM_BGR,
    tabBarBgr: theme.TAB_BAR_BGR,
    radiusBtn: theme.RADIUS_BTN_BGR
  },
};

const ThemeProvider = (props) => {
  const [themes, setTheme] = useState(pallete.dark);

  const toggleTheme = () => {
    if (themes === pallete.light) {
      setTheme(pallete.dark);
    } else if (themes === pallete.dark) {
      setTheme(pallete.light);
    }
  };
  return (
    <ThemeContext.Provider value={{ themes, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, pallete };
