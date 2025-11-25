import "./App.css";
import Header from "./Components/Header";
import { courses as firstCourses } from "./pages/data";
import Course from "./pages/Course";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";

function App() {
  const [courses, setCourses] = useState(firstCourses);

  // const moveCourse = (index) => {
  //   const updatedCourses = [...courses];
  //   updatedCourses.splice(index);
  //   setCourses(updatedCourses);
  // };

  const moveCourse = (fromIndex, toIndex) => {
    const updatedCourses = [...courses];
    const [movedItem] = updatedCourses.splice(fromIndex, 1);
    updatedCourses.splice(toIndex, 0, movedItem);
    setCourses(updatedCourses);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Header />
        <div className="course-main">
          {courses?.map((course, index) => (
            <Course
              key={course.id}
              index={index}
              course={course}
              moveCourse={moveCourse}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
