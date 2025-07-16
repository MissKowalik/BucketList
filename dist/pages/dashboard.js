import { renderDreams, deleteDreamById, toggleDreamChecked } from "../services/dreamService.js";
import { displayUserName } from "../utils/storage.js";
// selecting elements
const userName = document.getElementById("user-name");
const dreamList = document.querySelector(".dream-list");
// initialze
displayUserName(userName);
renderDreams(dreamList);
// handle deleting a dream using event delegation
dreamList.addEventListener("click", (event) => {
    // find out what was clicked
    const target = event.target;
    // check if delete button or image inside it was clicked
    if (target.closest(".delete-button")) {
        const li = target.closest("li"); // find li element that holds the clicked dream
        const dreamId = Number(li.dataset.id); // get the id of the dream to delete
        deleteDreamById(dreamId, dreamList); // remove dream from array
    }
});
// handle toggling "checked" state
dreamList.addEventListener("change", (event) => {
    const target = event.target;
    // check if a checkbox was toggled
    if (target.classList.contains("dream-check")) {
        const li = target.closest("li");
        const dreamId = Number(li.dataset.id);
        toggleDreamChecked(dreamId, target.checked);
    }
});
//# sourceMappingURL=Dashboard.js.map