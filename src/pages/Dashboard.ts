import { renderDreams, deleteDreamById, toggleDreamChecked } from "../services/dreamService.js";
import { displayUserName } from "../utils/storage.js";

// selecting elements
const userName = document.getElementById("user-name") as HTMLSpanElement;
const dreamList = document.querySelector(".dream-list") as HTMLUListElement;

// initialze
displayUserName(userName);
renderDreams(dreamList);


// handle deleting a dream using event delegation
dreamList.addEventListener("click", (event) => {
    // find out what was clicked
    const target = event.target as HTMLElement;

    // check if delete button or image inside it was clicked
    if (target.closest(".delete-button")) {
        const li = target.closest("li") as HTMLElement; // find li element that holds the clicked dream
        const dreamId = Number(li.dataset.id); // get the id of the dream to delete
        deleteDreamById(dreamId, dreamList); // remove dream from array
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