import React from 'react'
import { Text, View } from 'react-native'
import css from "../../globals/style";

export default function CourseInfo({courseInfo}) {
    return (
        <View>
            <Text style={css.courseTitle}>{courseInfo.name}</Text>
            <Text style={css.courseContent}>{courseInfo.author}</Text>
            <Text style={css.courseContent}>{`${courseInfo.level} . ${courseInfo.released} . ${courseInfo.duration}`}</Text>
        </View>
    )
}
