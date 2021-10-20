import React, { useEffect, useState } from "react";
import Action from "./action";
import { AddServer, AddTask } from "./otherComp";
export default Server;

function Server() {
  const [countServer, setCountServer] = useState(0);
  const [task, setTask] = useState("");
  const [serverCount, setServerCount] = useState([
    { server: <AddServer />, task: false }
  ]);
  const [taskCount, setTaskCount] = useState([]);
  const [isEmpty, setEmpty] = useState(true);

  //on changing task number
  const handleTask = (e) => {
    const a = e.target.value;
    setTask(a);
    setTaskCount(taskCount);
    console.log(a);
  };

  //effecting on servercount
  function eff() {
    let a = serverCount.length;
    setCountServer(a + 1);
    console.log(countServer);
  }

  //useeffect hook
  useEffect(() => {
    console.log("changed");
    eff();
  }, []);

  // on adding tasks
  const addTask = (e) => {
    const n = task;
    console.log(n);
    for (let i = 0; i < n; i++) {
      let k = taskCount.length;
      taskCount.push(<AddTask k={k} arr={taskCount} set={setTaskCount} />);
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
      <div id="task" className="p-2">
        <h1>task</h1>
        {taskCount.length === 0 ? (
          <p>you can add tasks for your servre</p>
        ) : (
          taskCount.map((data, i) => {
            return <div className="d-flex flex-row">{data}</div>;
          })
        )}
      </div>

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
