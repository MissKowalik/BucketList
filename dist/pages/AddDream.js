import { displayUserName, loadDreams } from "../utils/storage.js";
import { isStringValid, isThemeValid } from "../utils/validation.js";
import { dreams as defaultDreams } from "../variables.js";
// selecting elements
const userName = document.getElementById("user-name");
const addDreamForm = document.querySelector("form");
const dreamInput = document.getElementById("dream");
const themeSelect = document.getElementById("dream-select");
const dreamErrMsg = document.getElementById("dream-error-message");
const themeErrMsg = document.getElementById("theme-error-message");
displayUserName(userName);
// live validation 
dreamInput.addEventListener("input", () => isStringValid(dreamInput.value, dreamErrMsg));
themeSelect.addEventListener("change", () => isThemeValid(themeSelect.value, themeErrMsg));
// form submission
addDreamForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const dreamValid = isStringValid(dreamInput.value, dreamErrMsg);
    const themeValid = isThemeValid(themeSelect.value, themeErrMsg);
    if (dreamValid && themeValid) {
        console.log(dreamInput.value.trim());
        // create new Dream object
        const newDream = {
            id: Date.now(),
            name: dreamInput.value.trim(),
            theme: themeSelect.value,
            checked: false
        };
        // add new dream to dreams array
        const dreams = loadDreams(defaultDreams);
        dreams.push(newDream);
        localStorage.setItem("dreams", JSON.stringify(dreams)); // saving dreams array to local storage
        alert("Ny dröm lades till i din lista");
        // reset form
        dreamInput.value = "";
        themeSelect.value = "";
    }
});
//# sourceMappingURL=AddDream.js.map