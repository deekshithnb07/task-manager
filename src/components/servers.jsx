import React, { useEffect, useState } from "react";
import Action from "./action";
import { AddServer, AddTask, I } from "./otherComp";
import Task from "./tasks";
export default Server;

function Server() {
  const [countServer, setCountServer] = useState(0);
  const [task, setTask] = useState("");
  const [serverCount, setServerCount] = useState([
    { server: <AddServer />, task: false }
  ]);
  const [taskCount, setTaskCount] = useState([]);
  const [isEmpty, setEmpty] = useState(true);
  const [taskWait, setTaskWait] = useState(true);

  //on changing task number
  const handleTask = (e) => {
    const a = e.target.value;
    setTask(a);
    setTaskCount(taskCount);
    console.log(a);
  };

  // asunc function
  async function test() {
    for (const er of taskCount) {
      console.log(er);
    }
  }

  //effecting on servercount
  function eff() {
    let a = serverCount.length;
    setCountServer(a + 1);
    console.log(countServer);
  }

  function deleteTask(e) {
    console.log(" task deleted");
    // taskCount.splice(1, 1);
    setTaskCount(taskCount);
  }
  //useeffect hook
  useEffect(() => {
    console.log("changed");
    eff();
  }, [Task, Action, setCountServer, setServerCount, setTaskCount, test]);

  // on adding tasks
  const addTask = (e) => {
    const n = task;
    console.log(n);
    for (let i = 0; i < n; i++) {
      let k = taskCount.length;
      taskCount.push({
        task: (
          <div
            className="d-flex justify-content-between text-center"
            id="add-task"
          >
            {taskWait ? (
              <p className="p-2">waiting...</p>
            ) : (
              <p className="p-2"> processing... </p>
            )}
            <i className="fas fa-trash-alt p-2" onClick={deleteTask} />
          </div>
        ),
        waiting: true
      });
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

  // on adding server
  function addserver(e) {
    serverCount.push({
      server: <AddServer />,
      task: false
    });
    setServerCount(serverCount);
    eff();
    console.log(serverCount);
  }

  // on deleting server
  function removeServer(e) {
    serverCount.pop();
    setServerCount(serverCount);
    eff();
    console.log(serverCount);
  }

  return (
    <div id="servers" className="d-flex flex-row justify-content-between">
      {/* server */}
      <div id="server" className="p-2">
        <h1>server</h1>
        {serverCount.length === 0
          ? serverCount.push({
              server: <AddServer />,
              task: false
            })
          : serverCount.map((data, i) => {
              return data.server;
            })}
      </div>

      {/* tasks */}
      <Task task={taskCount} />

      {/* action */}
      <Action
        addserver={addserver}
        removeServer={removeServer}
        task={task}
        handleTask={handleTask}
        addTask={addTask}
      />
    </div>
  );
}
