import { StyleSheet } from 'react-native';
import theme from "./theme";

export default StyleSheet.create({
  screenTitle: {
    fontSize: theme.FONT_SIZE_SCREEN_TITLE, 
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    color: theme.PRIMARY_TEXT_COLOR
  },
  sectionTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.PRIMARY_TEXT_COLOR
  },
  courseTitle:{
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_TEXT_COLOR,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
  courseContent: {
    fontSize: theme.FONT_SIZE_SMALL,
    color:theme.SECONDARY_TEXT_COLOR
  },
  buttonTitle: {
    fontSize: theme.FONT_SIZE_BUTTON_TITLE, 
    color: theme.PRIMARY_TEXT_COLOR,
    marginRight: theme.SMALL_MARGIN
  },
  screenContent: {
    margin: theme.LARGE_MARGIN,
  },
  viewWithRadius: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#708090",
    paddingVertical: 40,
    marginVertical: 10,
    borderRadius: 3,
  }
});