
const server = []
const task = []
let val = 0;

function setTozero(){
    val = 0;
}


serverDiv = {server:`<div class="complete-task">
                <span class="exect"></span>
            </div>`,
        waiting: true}
taskDiv = {task: `<div class="d-flex justify-content-between text-center" id="add-task">
          <p class="p-2"> processing... </p>
            <i class="fas fa-trash-alt p-2" onclick="removeTask()"></i>
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
    document.getElementById("server").innerHTML = server.map((data, i) =>{
        return  "<div>" + data.server + "</div>" 
    }).join(''); 
    if(server.length === 0){
        document.getElementById("server").innerHTML = `<h2 class="complete-task">no server available</h2>`
    }
}

// onLoad
// (function onLoadAdd(e){
//     console.log(server);
//     document.getElementById("server").innerHTML = server.map((data, i) =>{
//         return  "<div>" + data.server + "</div>" 
//     }).join(''); 
// })();

// add tasks
function addTask(){
    for(i=0; i <= val; i++){
    task.push(taskDiv);
    document.getElementById("task").innerHTML = task.map((data, i) =>{
        return  "<div>" + data.task + "</div>" 
    }).join(''); 
    };
    console.log(task);
    setTozero();
}

// remove task
function removeTask(e){
    const i = --task.length;
    task.splice(i,1);
    document.getElementById("task").innerHTML = task.map((data, i) =>{
        return  "<div>" + data.task + "</div>" 
    }).join(''); 
    console.log(`tasks working are ${task.length}`);
    if(task.length === 0){
        document.getElementById("task").innerHTML = `<h2 class="complete-task">no task available</h2>`
    }
}

// onchange event of addTask
function handleTask(e){
    val = e;
    console.log(val);
    return e;
}