// setup des variables
let body = document.body;

let btnAdd = document.querySelector('#add-btn'); // btn Ajouter



let main = document.querySelector('main');


let textTask = document.querySelector('.main-input').value;

btnAdd.addEventListener('click', () => {
    let task = document.createElement("div"); //Correspond a l'element qui vas être ajouter
    task.classList.add('task'); //Je donne la classe task qui contient le styling.
    main.appendChild(task); //j'ajoute l'element au main
    // creation des icones
    let paragraphe = document.createElement('p');
    let icons = document.createElement('div');
    icons.classListAdd('icons');
    // ajout de paragraphe et icons dans task
    task.appendChild(paragraphe);
    task.appendChild(icons);

    let taskDelete = document.createElement('i');
    let taskEdit = document.createElement('i');
    let taskComplete = document.createElement('i');
});