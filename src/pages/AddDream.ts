import { displayUserName } from "../utils/storage.js";
import { isDreamValid, isThemeValid } from "../utils/validation.js";

// selecting elements
const userName = document.getElementById("user-name") as HTMLSpanElement;
const addDreamForm = document.querySelector("form") as HTMLFormElement;
const dreamInput = document.getElementById("dream") as HTMLInputElement;
const themeSelect = document.getElementById("dream-select") as HTMLSelectElement;
const dreamErrMsg = document.getElementById("dream-error-message") as HTMLParagraphElement;
const themeErrMsg = document.getElementById("theme-error-message") as HTMLParagraphElement;

displayUserName(userName);

// live validation 
dreamInput.addEventListener("input", () => isDreamValid(dreamInput.value, dreamErrMsg));
themeSelect.addEventListener("change", () => isThemeValid(themeSelect.value, themeErrMsg));