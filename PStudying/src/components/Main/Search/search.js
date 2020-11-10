import React from "react";
import { ScrollView } from "react-native";
import SearchBarCustom from "./SearchBar/search-bar";
import ScreenHeader from "../../Common/screen-header";
import SearchList from "./SearchList/search-list"
import SearchDetail from "./SearchDetail/search-detail"
import css from "../../../globals/style"

export default function search() {
  return (
    <SearchDetail/>
    // <ScrollView contentContainerStyle={css.screenContent}>
    //   <ScreenHeader screenTitle="Search"/>
    //   <SearchBarCustom />
    //   <SearchList title="Recent searches" clearBtn="true"/>
    //   <SearchList title="Your interested"/>
    // </ScrollView>
  );
}
