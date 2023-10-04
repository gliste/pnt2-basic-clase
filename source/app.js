//document.addEventListener("DOMContentLoaded", () => holaMundo());
//esta función permite la ejecución del load de la página. Cuando se termina de cargar el html.
document.addEventListener("DOMContentLoaded", () => createUser());

function createUser(user) {
    const main = document.getElementById('main'); //donde document=elemento raíz; getElementById=método
    //que trae los elementos; 'main'= div (línea 41 de index.html). Todo se guarda en una constante
    const users = document.createElement("ul"); //createElement=crea un elemento dinámicamente; 
    //donde se le pasa por parámetro lo que se desea crear: ul, a, div, etc.En este caso ul.
    main.appendChild(users); //para asociarlo al elemento raíz se utiliza el método appendChild
}

//TODO: ver el tema del Module
//TODO: ver el tema de utilizar archivos js desde otro js