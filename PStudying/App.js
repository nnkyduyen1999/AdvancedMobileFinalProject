import React from "react";
import Home from "./src/components/Main/Home/home";
// import Download from "./screens/Downloads";
import Browse from "./src/components/Main/Browse/browse"
import { SafeAreaView, StyleSheet } from "react-native";
import css from "./src/globals/style"

export default function App() {
  return (
    <SafeAreaView style={css.darkTheme}>
      {/* <Home /> */}
      <Browse/>
    </SafeAreaView>
  );
}







