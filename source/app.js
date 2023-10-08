//document.addEventListener("DOMContentLoaded", () => holaMundo());
//esta función permite la ejecución del load de la página. Cuando se termina de cargar el html.
//document.addEventListener("DOMContentLoaded", () => createUser());
document.addEventListener("DOMContentLoaded", () => Load());

function Load() {
    // const user = { name: "Adele Vance", twitter: "@Adele" }
    //al utilizar el export del archivo no son necesarias las siguientes líneas.
    //const users =
    //[{ name: "Adele Vance", twitter: "@Adele" },
    //{ name: "Alex Wilber", twitter: "@Alex" }
    //];
    //createUser(user);

    users.forEach(user => createUser(user));

}

function createUser(user) {
    const main = document.getElementById('main'); //donde document=elemento raíz; getElementById=método
    //que trae los elementos; 'main'= div (línea 41 de index.html). Todo se guarda en una constante

    const users = document.createElement("ul"); //createElement=crea un elemento dinámicamente; 
    //donde se le pasa por parámetro lo que se desea crear: ul, a, div, etc.En este caso ul.

    //se utiliza el parámetro que tiene el elemento ul; en este caso, la clase "user-list"
    users.className = "users-list";

    main.appendChild(users); //para asociarlo al elemento raíz se utiliza el método appendChild

    const userItem = document.createElement("li"); //se crean los elementos: li
    //para darle un estilo utilizo la clase de li
    userItem.className = "user-item";
    //se agrega al elemnto; en este caso, users
    users.appendChild(userItem);

    const card = document.createElement("div");
    card.className = "card user-item__content";
    userItem.appendChild(card);


    //se crea el link 
    const link = document.createElement("a");
    link.href = "#"; //Podría ir un link a otra página
    card.appendChild(link);

    //se crea el div que contiene la imagen

    const userItemImagen = document.createElement("div");
    userItemImagen.className = "user-item__image avatar";
    link.appendChild(userItemImagen);

    const imageUser = document.createElement("img");
    imageUser.src = `img/${user.name}.jpg`;
    userItemImagen.appendChild(imageUser);

    const userItemInfo = document.createElement("div");
    userItemInfo.className = "user-item__info";
    link.appendChild(userItemInfo);

    const nombreUser = document.createElement("h2");
    nombreUser.innerHTML = user.name;
    userItemInfo.appendChild(nombreUser);

    const twitter = document.createElement("h3");
    twitter.innerHTML = user.twitter;
    userItemInfo.appendChild(twitter);




}

//TODO: ver el tema del Module
//TODO: ver el tema de utilizar archivos js desde otro js

//TODO 1: Arreglar para que muestre las imágenes correctamente.
//TODO 2. Crear la pagina de detalle de usuario, donde muestre todos los
//          datos. (foto y datos) 