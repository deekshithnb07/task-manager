import React from "react";
export default Task;

function Task(props) {
  return (
    <div id="task" className="p-2">
      <h1>task</h1>
      {props.task.length === 0 ? (
        <p>you can add tasks for the servre</p>
      ) : (
        props.task.map((data, i) => {
          return <div className="d-flex flex-row">{data.task}</div>;
        })
      )}
    </div>
  );
}
