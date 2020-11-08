import React from "react";
import Home from "./src/components/Main/Home/home";
// import Download from "./screens/Downloads";
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0E0F13",
  }
})





