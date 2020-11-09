import React from 'react';
import { View, Text } from 'react-native'
import css from "../../../globals/style"
const listCourseItems = ({courseInfo}) => {
    return (
        <View>
            <Text style={css.courseTitle}>{courseInfo.name}</Text>
        </View>
    );
}

export default listCourseItems;
