import { user, dreams} from "../variables.js";
import { Dream } from "../models/Dream.js";

// selecting elements
const userName = document.getElementById("user-name") as HTMLSpanElement;
const dreamList = document.querySelector(".dream-list") as HTMLUListElement;

// display logged-in Username
function displayUserName(): void {
    const storedName = localStorage.getItem("username");
    if (storedName) {
        userName.textContent = storedName;
    }
}

// create a dream <li> element
function createDreamListItem(dream: Dream): HTMLLIElement {
    // create list item
    const li = document.createElement("li");
    li.className = "dream-list_item";
    li.setAttribute("data-id", dream.id.toString())

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
    deleteButton.className = "delete-button";
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "../assets/images/trash_delete.png";
    deleteButton.appendChild(deleteIcon);

    // append all to li
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);

    return li;
}

// (re)render the entire dream list
function renderDreams(): void {
    dreamList.innerHTML = "";

    dreams.forEach(dream => {
        const listItem = createDreamListItem(dream);
        dreamList.appendChild(listItem);
    });
}

// delete dream by ID
function deleteDreamById(id: number): void {
    const index = dreams.findIndex((dream) => dream.id === id); // find index of the dream in the array
    if (index !== -1) {
        dreams.splice(index, 1); // if matching dream was found, remove it using splice
        renderDreams(); // re-render after deletion
    }
}

// update dream's checked status
function toggleDreamChecked(id: number, checked: boolean): void {
    const dream = dreams.find(d => d.id === id);
    if (dream) {
        dream.checked = checked;
        console.log(`Dream "${dream.name}" marked as ${dream.checked ? "fulfilled" : "unfulfilled"}`);
    }
}

// initialze
displayUserName();
renderDreams();

// handle deleting a dream using event delegation
dreamList.addEventListener("click", (event) => {
    // find out what was clicked
    const target = event.target as HTMLElement; 

    // check if delete button or image inside it was clicked
    if (target.closest(".delete-button")) {
        const li = target.closest("li") as HTMLElement; // find li element that holds the clicked dream
        const dreamId = Number(li.dataset.id); // get the id of the dream to delete
        deleteDreamById(dreamId); // remove dream from array
    }
});

// handle toggling "checked" state
dreamList.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;

    // check if a checkbox was toggled
    if (target.classList.contains("dream-check")) {
        const li = target.closest("li") as HTMLElement;
        const dreamId = Number(li.dataset.id);
        toggleDreamChecked(dreamId, target.checked);
    }    
});