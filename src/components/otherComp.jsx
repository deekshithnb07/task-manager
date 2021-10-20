import React from "react";
export { AddServer, AddTask };

function AddServer() {
  return (
    <div className="complete-task">
      <span></span>
    </div>
  );
}

function AddTask(props) {
  return (
    <div className="d-flex justify-content-between text-center" id="add-task">
      <p className="p-2">waiting...</p>
      <i
        className="fas fa-trash-alt p-2"
        onClick={() => {
          console.log(props.k + " task deleted");
          props.arr.splice(props.k, 1);
          props.set = props.arr;
        }}
      />
    </div>
  );
}
