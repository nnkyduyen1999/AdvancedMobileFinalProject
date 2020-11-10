import React from 'react';
import { View } from 'react-native'
import css from "../../../globals/style"
import ScreenHeader from "../../Common/screen-header"
import ListCourse from "../../Courses/ListCourse/list-course"
import BackButton from "../../Common/back-button"

const Download = () => {
    return (
        <View style={css.screenContentNoPaddingTop}>
            <BackButton title="Home"/>
            <ScreenHeader screenTitle="Download"/>
            <ListCourse/>
        </View>
    );
}

export default Download;
