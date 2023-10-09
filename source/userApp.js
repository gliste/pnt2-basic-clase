import { users } from "../data/users.js";

document.addEventListener("DOMContentLoaded", () => Load());

function Load() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    console.log(params.get("userId"));
    const user = users.find(user => user["Object Id"] == params.get("userId")); //trae null
    console.log(user);
    //luego de verificar el null, llamar a la función createUsuario

    //28/8 TODO: el UserDetails o crear componente con detalle del usuario. 
    //hacer formato plano: foto cuadrada, nombre y listado de propiedades abajo. 
    //se genera una misma página que cambia por cada usuario

    function createUsuario(user) {
        const main = document.getElementById('main');
        const users = document.createElement("ul");
        main.appendChild(users);


    }


}
