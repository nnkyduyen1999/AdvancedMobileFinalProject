import React, {useContext} from 'react';
import { View, Text } from 'react-native'
import css from "../../globals/style"
import {ThemeContext} from "../../providers/theme-provider";

const ScreenHeader = ({screenTitle}) => {
    const {themes} = useContext(ThemeContext);

    return (
        <View style={{paddingVertical: 20}}>
            <Text style={[css.screenTitle, {color: themes.text}]}>{screenTitle}</Text>
        </View>
    );
}

export default ScreenHeader;
