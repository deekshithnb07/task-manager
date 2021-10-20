import React, { useState } from "react";
export default Action;

function Action(props) {
  return (
    <div className="p-2" id="action">
      <h1>Action</h1>
      <button className="bt" onClick={props.addserver}>
        add server
      </button>
      <button className="bt" onClick={props.removeServer}>
        remove server
      </button>
      <h3>server to be removed </h3>
      <input
        className="tsk"
        type="number"
        value={props.task}
        onChange={props.handleTask}
        min="1"
      />
      <button className="bt" onClick={props.addTask}>
        add tasks
      </button>
    </div>
  );
}
