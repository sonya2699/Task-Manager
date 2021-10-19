

// TASK MANAGER


const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;


const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];


let showTasks = ``;


let newTask;

let num;


let removed;


let userInput = prompt(menu).toUpperCase();

while (userInput !== `CLOSE`){


  if (userInput === `TASKS`){


    for (task of tasks){

 
      showTasks += `${task}\n`;
    }

    
    alert(showTasks);


    showTasks = "";
  }
  
 
  if (userInput === `NEW`){

    
    newTask = prompt(`Please enter the new task:`);


    while (newTask === ``){
      newTask = prompt(`Please enter the new task:`);
    }

    alert(`"${newTask}" has been added!`);

    
    tasks.push(newTask);
  }

 
  if (userInput === `REMOVE`){

    
    for(i = 0; i < tasks.length; i++){

     
      showTasks += `${i + 1}: ${tasks[i]}\n`;
    }

    num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;

   
    while (Math.floor(num) !== num || num < 0 || num >= tasks.length || !num){

      alert(`Not a valid entry`);

      
      num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;
    }

   
    removed = tasks.splice(num, 1);

    alert(`"${removed[0]}" has been removed`);

 
    showTasks = ``;
  }

  userInput = prompt(menu).toUpperCase();
}


alert(`Thank you for using Task Manager`);



