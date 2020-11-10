import React from 'react';
import { View, Text } from 'react-native'
import css from "../../globals/style"
const ScreenHeader = ({screenTitle}) => {
    return (
        <View style={{paddingVertical: 20}}>
            <Text style={css.screenTitle}>{screenTitle}</Text>
        </View>
    );
}

export default ScreenHeader;
