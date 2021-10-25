
const server = []
const task = []
let val = 0

serverDiv = {server:`<div class="complete-task">
                <span class="exect"></span>
            </div>`,
        waiting: true}
taskDiv = {task: `<div className="d-flex justify-content-between text-center" id="add-task">
          <p className="p-2"> processing... </p>
            <i class="fas fa-trash-alt p-2" onclick="" />
            </div>`,
         waiting: true}

// add server
function addServer(e){
    server.push(serverDiv)
    console.log(server);
    document.getElementById("server").innerHTML = server.map((data, i) =>{
        return  "<div>" + data.server + "</div>" 
    }).join(''); 
}   

// remove server
function removeServer(e){
    server.pop();
    console.log(server);
}

// add tasks
function addTask(){
    for(i=0; i <= val; i++){
    task.push(taskDiv);
    }
    console.log(task);
    document.getElementById("task").innerHTML = task.map((data, i) =>{
        return  "<div>" + data.task + "</div>" 
    }).join(''); 
}

// remove task
function removeTask(e){
    task.slice(i,1)
    console.log(`tasks working are ${task}`)
}

// onchange event of addTask
function handleTask(e){
    val = e;
    console.log(val);
}