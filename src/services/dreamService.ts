import { dreams } from "../variables.js";
import { createDreamListItem } from "../utils/domHelpers.js";

// (re)render the entire dream list
export function renderDreams(dreamList: HTMLUListElement) {
    dreamList.innerHTML = "";

    dreams.forEach(dream => {
        const listItem = createDreamListItem(dream);
        dreamList.appendChild(listItem);
    });
}

// delete dream by ID
export function deleteDreamById(id: number, dreamList: HTMLUListElement) {
    const index = dreams.findIndex((dream) => dream.id === id); // find index of the dream in the array
    if (index !== -1) {
        dreams.splice(index, 1); // if matching dream was found, remove it using splice
        renderDreams(dreamList); // re-render after deletion
    }
}

// update dream's checked status
export function toggleDreamChecked(id: number, checked: boolean) {
    const dream = dreams.find(d => d.id === id);
    if (dream) {
        dream.checked = checked;
        console.log(`Dream "${dream.name}" marked as ${checked ? "fulfilled" : "unfulfilled"}`);
    }
}