import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./screens/Home";
import Download from "./screens/Downloads";
import { ThemeProvider} from 'react-native-elements';
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}




