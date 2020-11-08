import React from 'react'
import SectionCourses from './SectionCourses/section-courses'
import { ScrollView } from 'react-native'
export default function home() {
    return (
        <ScrollView>
            <SectionCourses title="Continue learning"/>
            <SectionCourses title="Paths"/>
            <SectionCourses title="Channels"/>
            <SectionCourses title="Bookmarks"/>
        </ScrollView>
    )
}

