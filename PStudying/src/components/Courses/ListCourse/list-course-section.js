import React from 'react'
import { SectionList, View, Text } from "react-native";
import ListCourseItem from "../ListCourseItems/list-course-items";
import SectionCourseTitle from "../../Common/section-course-title";
export default function ListCourseSection() {
    const DATA = [
        {
          title: "Main dishes",
          data: [
            {
              id: "1",
              name: "React Native",
              author: "Hai Pham",
              level: "Advanced",
              released: "May 2019",
              duration: "40h",
            },
            {
              id: "2",
              name: "React",
              author: "Khanh Nguyen",
              level: "Advanced",
              released: "May 2019",
              duration: "60h",
            },
            {
              id: "3",
              name: "Test",
              author: "Hanh Tran",
              level: "Beginner",
              released: "May 2019",
              duration: "45h",
            },
          ],
        },
        {
          title: "Sides",
          data: [
            {
              id: "1",
              name: "React Native",
              author: "Hai Pham",
              level: "Advanced",
              released: "May 2019",
              duration: "40h",
            },
            {
              id: "2",
              name: "React",
              author: "Khanh Nguyen",
              level: "Advanced",
              released: "May 2019",
              duration: "60h",
            },
            {
              id: "3",
              name: "Test",
              author: "Hanh Tran",
              level: "Beginner",
              released: "May 2019",
              duration: "45h",
            },
          ],
        },
        {
          title: "Drinks",
          data: [
            {
              id: "1",
              name: "React Native",
              author: "Hai Pham",
              level: "Advanced",
              released: "May 2019",
              duration: "40h",
            },
            {
              id: "2",
              name: "React",
              author: "Khanh Nguyen",
              level: "Advanced",
              released: "May 2019",
              duration: "60h",
            },
            {
              id: "3",
              name: "Test",
              author: "Hanh Tran",
              level: "Beginner",
              released: "May 2019",
              duration: "45h",
            },
          ],
        },
        {
          title: "Desserts",
          data: [
            {
              id: "1",
              name: "React Native",
              author: "Hai Pham",
              level: "Advanced",
              released: "May 2019",
              duration: "40h",
            },
            {
              id: "2",
              name: "React",
              author: "Khanh Nguyen",
              level: "Advanced",
              released: "May 2019",
              duration: "60h",
            },
            {
              id: "3",
              name: "Test",
              author: "Hanh Tran",
              level: "Beginner",
              released: "May 2019",
              duration: "45h",
            },
          ],
        },
      ];
    return (
        <SectionList
        contentContainerStyle={{ marginVertical: 20 }}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <ListCourseItem course={item} listCourseNav={nav}/>}
        renderSectionHeader={({ section: { title, data } }) => (
          <SectionCourseTitle
            seeAll={`${data.length} results   `}
            sectionTitle={title}
          />
        )}
        
        ListEmptyComponent={<SearchEmpty/>}
      />
    )
}
