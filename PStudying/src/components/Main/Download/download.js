import React from 'react';
import { View } from 'react-native'
import css from "../../../globals/style"
import ScreenHeader from "../../Common/screen-header"
import ListCourse from "../../Courses/ListCourse/list-course"
const Download = () => {
    return (
        <View style={css.screenContent}>
            <ScreenHeader screenTitle="Download"/>
            <ListCourse/>
        </View>
    );
}

export default Download;
