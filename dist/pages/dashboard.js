import { dreams } from "../variables.js";
// selecting elements
const userName = document.getElementById("user-name");
const dreamList = document.querySelector(".dream-list");
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
        li.setAttribute("data-id", dream.id.toString());
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
        // append li to the list
        dreamList.appendChild(li);
    });
}
// initial render when page loads
renderDreams();
// handle deleting a dream using event delegation
dreamList.addEventListener("click", (event) => {
    // find out what was clicked
    const target = event.target;
    // check if delete button or image inside it was clicked
    if (target.closest(".delete-button")) {
        const li = target.closest("li"); // find li element that holds the clicked dream
        const dreamId = Number(li.dataset.id); // get the id of the dream to delete
        // remove dream from array
        const index = dreams.findIndex((dream) => dream.id === dreamId); // find index of the dream in the array
        if (index !== -1) {
            dreams.splice(index, 1); // if matching dream was found, remove it using splice
            renderDreams(); // re-render after deletion
        }
    }
});
// handle toggling "checked" state
dreamList.addEventListener("change", (event) => {
    const target = event.target;
    // check if a checkbox was toggled
    if (target.classList.contains("dream-check")) {
        const li = target.closest("li");
        const dreamId = Number(li.dataset.id);
        // find the dream and update its checked status
        const dream = dreams.find(d => d.id === dreamId);
        if (dream) {
            dream.checked = target.checked;
            console.log(`Dream "${dream.name}" marked as ${dream.checked ? "fulfilled" : "unfulfilled"}`);
        }
    }
});
//# sourceMappingURL=Dashboard.js.map