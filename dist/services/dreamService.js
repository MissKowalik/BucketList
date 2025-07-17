import { dreams as defaultDreams } from "../variables.js";
import { createDreamListItem } from "../utils/domHelpers.js";
import { loadDreams } from "../utils/storage.js";
// (re)render the entire dream list
export function renderDreams(dreamList) {
    dreamList.innerHTML = "";
    const dreams = loadDreams(defaultDreams);
    dreams.forEach(dream => {
        const listItem = createDreamListItem(dream);
        dreamList.appendChild(listItem);
    });
}
// delete dream by ID
export function deleteDreamById(id, dreamList) {
    const dreams = loadDreams(defaultDreams);
    const index = dreams.findIndex((dream) => dream.id === id); // find index of the dream in the array
    if (index !== -1) {
        dreams.splice(index, 1); // if matching dream was found, remove it using splice
        localStorage.setItem("dreams", JSON.stringify(dreams)); // save to local storage
        renderDreams(dreamList); // re-render after deletion
    }
}
// update dream's checked status
export function toggleDreamChecked(id, checked) {
    const dreams = loadDreams(defaultDreams);
    const dream = dreams.find(d => d.id === id);
    if (dream) {
        dream.checked = checked;
        localStorage.setItem("dreams", JSON.stringify(dreams));
        console.log(`Dream "${dream.name}" marked as ${checked ? "fulfilled" : "unfulfilled"}`);
    }
}
//# sourceMappingURL=dreamService.js.map