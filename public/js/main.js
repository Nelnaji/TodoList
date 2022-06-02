// setup des variables
let body = document.body;

let btnAdd = document.querySelector('#add-btn'); // btn Ajouter



let main = document.querySelector('main');

let textTask = document.querySelector('.main-input');

btnAdd.addEventListener('click', () => {
    let task = document.createElement("div"); //Correspond a l'element qui vas être ajouter
    task.classList.add('task'); //Je donne la classe task qui contient le styling.

    main.appendChild(task); //j'ajoute l'element au main


});