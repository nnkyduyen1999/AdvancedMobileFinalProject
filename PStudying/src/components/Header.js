import React from "react";
import {StyleSheet} from "react-native";
import { Header} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

const settingIcon = <Icon name="cog" size={25} color="white"/>;
export default function HeaderCustom(props) {
  return (
    <Header containerStyle={styles.container}
      leftComponent={settingIcon}
      centerComponent={{ text: props.name, style: { color: "white", fontWeight: "bold"} }}
    />
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black"
    }
})
