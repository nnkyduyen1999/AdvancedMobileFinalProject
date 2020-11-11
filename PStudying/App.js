import React from "react";
import Home from "./src/components/Main/Home/home";
import Browse from "./src/components/Main/Browse/browse"
import Search from "./src/components/Main/Search/search"
import Download from "./src/components/Main/Download/download"
import CourseDetail from "./src/components/CourseDetail/course-detail"
import Login from "./src/components/Authentication/Login/login"
import LoginForm from "./src/components/Authentication/Login/Login-Form/login-form"
import Register from "./src/components/Authentication/Register/register"
import Setting from "./src/components/Account Management/Setting-Account/setting"
import Profile from "./src/components/Account Management/Profile/profile"
import { SafeAreaView } from "react-native";
import css from "./src/globals/style"

export default function App() {
  return (
    <SafeAreaView style={css.darkTheme}>
      {/* <Home /> */}
      {/* <Browse/> */}
      {/* <Search /> */}
      {/* <Download/> */}
      {/* <CourseDetail/> */}
      {/* <LoginForm/> */}
      {/* <Register/> */}
      <Setting/>
      {/* <Profile/> */}
    </SafeAreaView>
  );
}







