import { StyleSheet } from 'react-native';
import theme from "./theme";

export default StyleSheet.create({
  sectionTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    color: theme.PRIMARY_TEXT_COLOR
  },
  courseTitle:{
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_TEXT_COLOR,
    fontWeight: theme.FONT_WEIGHT_NORMAL,
  },
  courseContent: {
    fontSize: theme.FONT_SIZE_SMALL,
    color:theme.SECONDARY_TEXT_COLOR
  }
});