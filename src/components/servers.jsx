import React, { useEffect, useState } from "react";
export default Server;

function Server() {
  const [countServer, setCountServer] = useState(0);
  const [task, setTask] = useState("");
  const [serverCount, setServerCount] = useState([<AddServer />]);
  const [taskCount, setTaskCount] = useState([]);
  const [isEmpty, setEmpty] = useState(false);

  const handleTask = (e) => {
    const a = e.target.value;
    setTask(a);
    console.log(a);
  };

  const addTask = (e) => {
    const n = task;
    console.log(n);
    for (let i = 0; i < n; i++) {
      taskCount.push(<AddTask />);
    }
    console.log(taskCount);
    if (taskCount.length === 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
    console.log(isEmpty);
    setTask("");
  };

  const deleteTask = () => {
    console.log("delete");
  };

  function addserver(e) {
    serverCount.push(<AddServer act={deleteTask} />);
    setCountServer(...serverCount);
    console.log(serverCount);
  }

  function removeServer(e) {
    setCountServer(`${serverCount.pop()}`);
    // serverCount.pop();
    console.log(serverCount);
  }

  return (
    <div id="servers" className="d-flex flex-row justify-content-between">
      {/* server */}
      <div id="server" className="p-2">
        <h1>server</h1>
        {serverCount.length === 0
          ? serverCount.push(<AddServer />)
          : serverCount.map((data, i) => {
              return data;
            })}
      </div>
      {/* tasks */}
      <div id="task" className="p-2">
        <h1>task</h1>
        {taskCount.length === 0
          ? null
          : taskCount.map((data, i) => {
              return (
                <div id="add-task" className="d-flex flex-row">
                  {data}
                  <i
                    className="fas fa-trash-alt p-2"
                    onClick={() => {
                      console.log(i + " task deleted");
                      taskCount.splice(i, 1);
                    }}
                  />
                </div>
              );
            })}
      </div>
      {/* action */}
      <div className="p-2">
        <h1>Action</h1>
        <button onClick={addserver}>add server</button>
        <button onClick={removeServer}>remove server</button>
        <h3>server to be removed {countServer.length}</h3>
        <input type="number" value={task} onChange={handleTask} />
        <button onClick={addTask}>add tasks</button>
      </div>
    </div>
  );
}

function AddServer() {
  return (
    <div className="complete-task">
      <span></span>
    </div>
  );
}

function AddTask() {
  return (
    <div className="d-flex flex-row" id="ad-ta">
      <p className="p-2">waiting...</p>
    </div>
  );
}
