import React from "react";
export default Task;

function Task(props) {
  return (
    <div id="task" className="p-2">
      <h1>task</h1>
      {props.taskCount.length === 0 ? (
        <p>you can add tasks for your servre</p>
      ) : (
        props.taskCount.map((data, i) => {
          return <div className="d-flex flex-row">{data}</div>;
        })
      )}
    </div>
  );
}
