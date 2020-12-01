import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Share, Alert } from "react-native";
import constant from "../../globals/constant";
import theme from "../../globals/theme";
import SplashScreen from "../../components/Others/SplashScreen/splash-screen";
import Login from "../../components/Authentication/Login/login";
import ForgetPassword from "../../components/Authentication/ForgetPassword/forget-password";
import VerifyEmail from "../../components/Authentication/Verify Email/verify-email";
import Register from "../../components/Authentication/Register/register";
import CourseDetail from "../../components/CourseDetail/course-detail";
import MainTabs from "../TabsNav/main-tabs";
import { Icon } from "react-native-elements";

const dismissIcon = (
  <Icon type="font-awesome" name="times" size={25} color={theme.BASIC_BLUE} />
);

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'Join new course',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        Alert.alert("Successfully share");
      } else {
        Alert.alert("Oppss. Cannot share now");
      }
    }
  } catch (error) {
    alert(error.message);
  }
};

export default MainModals = ({ navigation }) => {
  const MainModals = createStackNavigator();

  return (
    <MainModals.Navigator
      mode="modal"
      initialRouteName={constant.navigationNames.SplashScreen}
    >
      <MainModals.Screen
        component={MainTabs}
        name={constant.navigationNames.Home}
        options={{ headerShown: false }}
      />
      <MainModals.Screen
        component={SplashScreen}
        name={constant.navigationNames.SplashScreen}
        options={{ headerShown: false }}
      />
      <MainModals.Screen
        component={Register}
        name={constant.navigationNames.Register}
        options={{ headerShown: false }}
      />
      <MainModals.Screen
        component={Login}
        name={constant.navigationNames.Login}
        options={{ headerShown: false }}
      />
      <MainModals.Screen
        component={VerifyEmail}
        name={constant.navigationNames.VerifyEmail}
        options={{ headerShown: false }}
      />
      <MainModals.Screen
        component={ForgetPassword}
        name={constant.navigationNames.ForgotPassword}
        options={{ headerShown: false }}
      />
      <MainModals.Screen
        component={CourseDetail}
        name={constant.navigationNames.CourseDetail}
        options={{
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                {...props}
                style={{ marginLeft: theme.LARGE_MARGIN }}
              >
                {dismissIcon}
              </TouchableOpacity>
            );
          },
          title: ``,
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ marginRight: theme.LARGE_MARGIN }}
                onPress={onShare}
              >
                <Icon
                  type="font-awesome"
                  name="share-alt"
                  size={25}
                  color={theme.BASIC_BLUE}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </MainModals.Navigator>
  );
};
