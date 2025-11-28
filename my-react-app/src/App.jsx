import "./App.css";
import Header from "./Components/Header";
import { courses as firstCourses } from "./pages/data";
import Course from "./pages/Course";
import { DndProvider /*useDrop*/ } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
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

  // const [, drop] = useDrop(() => ({
  //   accept: "card",
  // }));

  return (
    <DndProvider backend={TouchBackend}>
      <div>
        <Header />
        <div className="course-main" /*ref={drop}*/>
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
