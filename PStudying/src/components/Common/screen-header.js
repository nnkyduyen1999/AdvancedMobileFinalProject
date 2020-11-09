import React from 'react';
import { View, Text } from 'react-native'
import css from "../../globals/style";
const ScreenHeader = ({screenTitle}) => {
    return (
        <View>
            <Text style={css.screenTitle}>{screenTitle}</Text>
        </View>
    );
}

export default ScreenHeader;
