import React, { useRef } from "react";
import "../css/Course.css";
import { useDrag, useDrop } from "react-dnd";

function Course({ course, index, moveCourse }) {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "card",
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [index]
  );

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "card",

      drop: (item) => {
        const fromIndex = item.index;
        const toIndex = index;

        moveCourse(fromIndex, toIndex);

        item.index = index;
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [index, moveCourse]
  );

  const dragDropRef = drag(drop(ref));
  const { title, description, image } = course;
  return (
    <div
      className="course"
      ref={dragDropRef}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
    >
      <div>
        <img src={image} width={200} height={130} />
        <h4 className="course-title">{title}</h4>
        <p className="course-desc">{description}</p>
      </div>
    </div>
  );
}

export default Course;
