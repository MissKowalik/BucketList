import { user, dreams} from "../variables.js";
import { Dream } from "../models/Dream.js";

// selecting elements
const userName = document.getElementById("user-name") as HTMLSpanElement;
const dreamList = document.querySelector(".dream-list") as HTMLUListElement;

// display logged-in Username
const storedName = localStorage.getItem("username");
if (storedName) {
    userName.textContent = storedName;
}

// render dream list
function renderDreams() {
    // clear list first
    dreamList.innerHTML = "";

    dreams.forEach(dream => {

        // create list item
        const li = document.createElement("li");
        li.className = "dream-list_item";

        // create checkbox
        const checkbox = document.createElement("input");
        checkbox.className = "dream-check";
        checkbox.type = "checkbox";
        checkbox.name = "dream-check";
        checkbox.id = `dream-check-${dream.id}`;
        checkbox.checked = dream.checked;

        // create label
        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.innerHTML = `${dream.name}, <span class="dream-theme">${dream.theme}</span>`;

        // create button
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "../assets/images/trash_delete.png";
        deleteButton.appendChild(deleteIcon);

        // append all to li
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);

        // append li to the list
        dreamList.appendChild(li);
    });
}

// initial render when page loads
renderDreams();