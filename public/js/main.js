// setup des variables
let body = document.body;

let btnAdd = document.querySelector('#add-btn'); // btn Ajouter

let main = document.querySelector('main');

let tasksArray = [];

// fonction check

const taskCompleted = function (button, div) {
    button.addEventListener('click', function () {
        if (div.style.backgroundColor == "") {
            div.style.backgroundColor = "rgb(146, 255, 91)";
        } else {
            div.style.backgroundColor = ""
        }
    })
}





btnAdd.addEventListener('click', function () {


    let task = document.createElement("div"); //Correspond a l'element qui vas être ajouter
    main.appendChild(task); //j'ajoute l'element au main 
    task.classList.add('task'); //Je donne la classe task qui contient le styling.
    let textTask = document.querySelector('.input-field').value;
    let paragraphe = document.createElement('p');


    // creation des icones
    let icons = document.createElement('div');
    icons.classList.add('icons');


    let taskEdit = document.createElement('i');
    let taskComplete = document.createElement('i');
    let taskDelete = document.createElement('i');




    // implementation des icones 
    icons.appendChild(taskComplete);
    icons.appendChild(taskEdit);
    icons.appendChild(taskDelete);

    // ajout des icones et paragraphe dans task

    paragraphe.innerText = textTask;

    task.appendChild(paragraphe);
    task.appendChild(icons);

    // ajouter dans le paragraphe le text de l'input



    taskComplete.classList.add('fa-solid', 'fa-circle-check', 'icon', 'task-complete');
    taskEdit.classList.add('fa-regular', 'fa-pen-to-square', 'icon', 'task-edit');
    taskDelete.classList.add('fa-regular', 'fa-trash-can', 'icon', 'task-delete');


    tasksArray.push(task)

    let btnTaskComplete = document.querySelector('.task-complete');
    taskCompleted(btnTaskComplete, task)


    console.log(tasksArray)
});