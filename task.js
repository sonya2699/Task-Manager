// Task Manager Project

const start = `Task Manager 

What would you like to do: 
"Task" - Display All Task 
"New" - Add A Task
"Remove" - Remove A Task
"Close"- Close The Task Manager
`;

const tasks1 = `Charge MacBook ,Master JavaScript`;

const new1 = `Please add a new task`;
const new2 = `New task has been added`;

const remove1 = `Remove a Task`;
const remove2 = `task has been removed`;

const close = `Close The Task Manager`;

let Input = prompt(start);

if (Input == "TASKS") {
    alert(task1);
}
    if (Input == "NEW"){
        prompt(new1);
        alert(new2);
}
    if (Input == "REMOVE"){
        prompt(remove1);
        alert(remove2);
        
}
    if (Input == "CLOSE"){
        alert(close);
}else{
    prompt(start);
}
