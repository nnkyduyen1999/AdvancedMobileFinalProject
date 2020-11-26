import React, {useState} from 'react';

const CourseContext = React.createContext();
const CourseProvider = (props) => {
    const [favoriteCourses, setFavoriteCourses] = useState([
        {
            id: "1F",
            name: "React Native",
            author: "Hai Pham",
            level: "Advanced",
            released: "May 2019",
            duration: "40h",
          }
    ]);
    return (
        <CourseContext.Provider value={{favoriteCourses, setFavoriteCourses}}>
            {props.children}
        </CourseContext.Provider>
    );
}

export { CourseProvider, CourseContext };
