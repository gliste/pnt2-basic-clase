import { users } from "../data/users";
document.addEventListener("DOMContentLoaded", () => Load());

function Load() {
    users.forEach(user => createUser(user));
}

function createUser(user) {
    const main = document.getElementById('main');

    const imageUser = document.createElement("img");
    imageUser.src = `img/${user["Display name"]}.jpg`
    main.appendChild(imageUser);

    const userItemInfo = document.createElement("div");
    userItemInfo.className = "user-item__info";
    main.appendChild(userItemInfo);

    const nombreUser = document.createElement("h2");
    nombreUser.innerHTML = user["Display name"];
    userItemInfo.appendChild(nombreUser);

    const twitter = document.createElement("h3");
    twitter.innerHTML = user.twitter;
    userItemInfo.appendChild(twitter);
}