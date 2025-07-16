import { displayUserName } from "../utils/storage.js";
// selecting elements
const userName = document.getElementById("user-name");
const addDreamForm = document.querySelector("form");
const dreamInput = document.getElementById("dream");
const themeSelect = document.getElementById("dream-select");
const dreamErrMsg = document.getElementById("dream-error-message");
const themeErrMsg = document.getElementById("theme-error-message");
displayUserName(userName);
// dream input validation
function isDreamValid() {
    const trimmedDream = dreamInput.value.trim();
    if (trimmedDream === "") {
        dreamErrMsg.style = "display: block";
    }
    else {
        dreamErrMsg.style = "display: none";
    }
}
// select dream theme validation
function isThemeValid() {
    const selectedTheme = themeSelect.value;
    if (!selectedTheme) {
        themeErrMsg.style = "display: block";
    }
    else {
        themeErrMsg.style = "display: none";
    }
}
// live validation 
dreamInput.addEventListener("input", isDreamValid);
themeSelect.addEventListener("change", isThemeValid);
//# sourceMappingURL=AddDream.js.map