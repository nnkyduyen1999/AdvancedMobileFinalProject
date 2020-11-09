import { StyleSheet } from 'react-native';
import theme from "./theme";

export default StyleSheet.create({
  darkTheme: {
    backgroundColor: theme.DARK_THEME
  },
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
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.PRIMARY_TEXT_COLOR,
  },
  buttonLayoutSmall: {
    borderRadius: 12,
    backgroundColor: theme.RADIUS_BTN_BGR,
    paddingHorizontal: 8,
    paddingVertical: 3
  },
  buttonLayoutBig: {
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: theme.RADIUS_BTN_BGR,
    marginVertical: theme.LARGE_MARGIN,
    marginRight: theme.LARGE_MARGIN
  },
  screenContent: {
    margin: theme.LARGE_MARGIN,
    paddingVertical: theme.LARGE_PADDING,
  },
  viewWithRadius: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#708090",
    paddingVertical: 40,
    marginVertical: 10,
    borderRadius: 3,
  },
  largeImgButton: {
    height: theme.LARGE_IMG_BUTTON_HEIGHT,
  },
  smallImgButton: {
    height: theme.SMALL_IMG_BUTTON_HEIGHT,
    width: theme.SMALL_IMG_BUTTON_WIDTH,
  },
  imgBtnText: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_TEXT_COLOR,
    textTransform: "uppercase",
    fontWeight: theme.FONT_WEIGHT_MID,
    textAlign: "center",
  }
});