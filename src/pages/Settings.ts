// här är det bara level-up!
import { name, themes } from "../variables.js";
import { logOut } from "../utils/navigation.js";

const nameInput = document.getElementById("name-input") as HTMLInputElement;
nameInput.value = name;

const themeList = document.getElementById("theme-list") as HTMLUListElement;
if (themeList) {
    themes.forEach(theme => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${theme}</p> <img src="../assets/images/trash_delete.png" />`;
        themeList.appendChild(li);
    });
}

// "logga ut"
const logOutBtn = document.querySelector(".logout");
logOutBtn?.addEventListener("click", logOut);