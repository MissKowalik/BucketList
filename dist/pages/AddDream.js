import { displayUserName } from "../utils/storage.js";
import { isDreamValid, isThemeValid } from "../utils/validation.js";
// selecting elements
const userName = document.getElementById("user-name");
const addDreamForm = document.querySelector("form");
const dreamInput = document.getElementById("dream");
const themeSelect = document.getElementById("dream-select");
const dreamErrMsg = document.getElementById("dream-error-message");
const themeErrMsg = document.getElementById("theme-error-message");
displayUserName(userName);
// live validation 
dreamInput.addEventListener("input", () => isDreamValid(dreamInput.value, dreamErrMsg));
themeSelect.addEventListener("change", () => isThemeValid(themeSelect.value, themeErrMsg));
//# sourceMappingURL=AddDream.js.map