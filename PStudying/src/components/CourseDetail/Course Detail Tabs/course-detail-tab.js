import React, {useContext, useEffect, useReducer} from "react";
import { ActivityIndicator } from 'react-native'
import "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import constant from "../../../globals/constant";
import theme from "../../../globals/theme";
import ListLesson from "../ListLessons/list-lesson";
import ListComments from "../ListComments/list-comments";


const Tab = createMaterialTopTabNavigator();

const CourseDetailTab = ({ courseInfo, nav }) => {
  
  return (
    <>
    <Tab.Navigator>
      <Tab.Screen name={constant.navigationNames.ListLesson}>
        {() => <ListLesson courseInfo={courseInfo} nav={nav}/>}
      </Tab.Screen>
      <Tab.Screen
        name={constant.navigationNames.ListComments}
      >
        {() => <ListComments courseInfo={courseInfo} nav={nav} />}
      </Tab.Screen>
    </Tab.Navigator>
    </>
    
  );
};

export default CourseDetailTab;
