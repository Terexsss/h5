let tasklist = [];

function addNewtask (NewTask){
    if (NewTask.trim()){
    tasklist.push( {
        name: NewTask,
        status: false,
    });
 }   else {
      console.log ("Название задачи не может быть пустым");  
    }
};
 
addNewtask ('Выучить Js');
addNewtask ('Сделать домашнее задание');
addNewtask ('Купить продукты');

function changeStatusTask(NewTask){
    let flag = false;
    for (let i = 0; i < tasklist.length; i++) {
if (NewTask === tasklist[i].name) {
   tasklist[i].status = true; 
   flag = true;   
}}
if (!flag) {
    console.log ("Неправильно введено название задачи");
}}
changeStatusTask("Купить продукты")

console.log (tasklist);

    
// function DeleteTask(NewTask) {
//     for (let i = 0; i < tasklist.length; i++){
//        if (NewTask === tasklist[i].name){
//         tasklist.splice (i,1);
//         }
//     }
// }
// DeleteTask("созвониться");
// console.log (tasklist);



function deleteTask(NewTask) {
    const i = tasklist.findIndex(task => task.name === NewTask);
    if (i !== -1) {
        tasklist.splice(i, 1); 
    } else {
        console.log(`Задача "${NewTask}" не найдена.`);
    }
}

deleteTask("Сделать домашнее задание");
console.log (tasklist);

function DisplayTasks() {
    if (tasklist.length === 0) {
        console.log("Список задач пуст.");
        return;
    }

    console.log("Список задач:");
    tasklist.forEach(task => {
        const status = task.completed ? "Выполнена" : "Не выполнена";
        console.log(`- ${task.name}: ${status}`);
    });
}
DisplayTasks();
console.log (tasklist);

