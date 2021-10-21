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
      {props.wait ? (
        <p className="p-2">waiting...</p>
      ) : (
        <p className="p-2"> processing... </p>
      )}
      <i className="fas fa-trash-alt p-2" onClick={props.delete} />
    </div>
  );
}
