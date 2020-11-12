import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import css from "../../../../globals/style"
import theme from "../../../../globals/theme"
export default class SearchBarCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(search) {
    this.setState({ search });
  }
  render() {
    const { search } = this.state;
    return (
      <SearchBar
        platform="ios"
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={css.darkTheme}
        inputContainerStyle={{height: 30, backgroundColor: "white"}}
        containerStyle={{backgroundColor: theme.DARK_THEME}}
      />
    );
  }
}
