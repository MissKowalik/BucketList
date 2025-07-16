import { displayUserName } from "../utils/storage.js";

// selecting elements
const userName = document.getElementById("user-name") as HTMLSpanElement;
const addDreamForm = document.querySelector("form") as HTMLFormElement;
const dreamInput = document.getElementById("dream") as HTMLInputElement;
const themeSelect = document.getElementById("dream-select") as HTMLSelectElement;
const dreamErrMsg = document.getElementById("dream-error-message") as HTMLParagraphElement;
const themeErrMsg = document.getElementById("theme-error-message") as HTMLParagraphElement;

displayUserName(userName);

// dream input validation
function isDreamValid() {
    const trimmedDream = dreamInput.value.trim();

    if (trimmedDream === "") {
        dreamErrMsg.style = "display: block";
    } else {
        dreamErrMsg.style = "display: none";
    }
}

// select dream theme validation
function isThemeValid() {
    const selectedTheme = themeSelect.value;

    if (!selectedTheme) {
        themeErrMsg.style = "display: block";
    } else {
        themeErrMsg.style = "display: none"
    }
}

// live validation 
dreamInput.addEventListener("input", isDreamValid);
themeSelect.addEventListener("change", isThemeValid);