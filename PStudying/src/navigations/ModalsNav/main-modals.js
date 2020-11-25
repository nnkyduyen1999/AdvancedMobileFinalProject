import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import constant from "../../globals/constant";
import SplashScreen from "../../components/Others/SplashScreen/splash-screen";
import Login from "../../components/Authentication/Login/login";
import ForgetPassword from "../../components/Authentication/ForgetPassword/forget-password";
import Register from "../../components/Authentication/Register/register";
import CourseDetail from "../../components/CourseDetail/course-detail";
import MainTabs from "../TabsNav/main-tabs"


export default MainModals = () => {
  const MainModals = createStackNavigator();

  return (
    <MainModals.Navigator mode="modal">
      <MainModals.Screen
        component={MainTabs}
        name={constant.navigationNames.MainTabs}
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
        component={ForgetPassword}
        name={constant.navigationNames.ForgotPassword}
        options={{ headerShown: false }}
      />

      <MainModals.Screen
        component={CourseDetail}
        name={constant.navigationNames.CourseDetail}
        options={{ headerShown: true }}
      />
    </MainModals.Navigator>
  );
};

