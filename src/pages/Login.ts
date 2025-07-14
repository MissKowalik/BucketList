import { user } from "../variables.js";
import { isNameValid, isPwValid } from "../utils/validation.js";

// selecting form elements
const loginForm = document.querySelector("form") as HTMLFormElement;
const nameInput = document.getElementById("username") as HTMLInputElement;
const pwInput = document.getElementById("password") as HTMLInputElement;
const toggleBtn = document.querySelector(".toggle-password");
const nameErrMsg = document.getElementById("username-error-message") as HTMLParagraphElement;
const pwErrMss = document.getElementById("password-error-message") as HTMLParagraphElement;


// show/hide password toggle
toggleBtn?.addEventListener("click", () => {
    if (pwInput.type === "password") {
        pwInput.type = "text";
    } else if (pwInput.type === "text") {
        pwInput.type = "password";
    }
});

// live validation
nameInput.addEventListener("input", () => isNameValid(nameInput.value, nameErrMsg));
pwInput.addEventListener("input", () => isPwValid(pwInput.value, pwErrMss));


// form submission
loginForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const nameValid = isNameValid(nameInput.value, nameErrMsg);
    const pwValid = isPwValid(pwInput.value, pwErrMss);

    if (nameValid && pwValid) {
        user.name = nameInput.value.trim(); // storing username globally
        localStorage.setItem("username", user.name);
        window.location.replace('./dashboard.html'); //redirect user to dashboard
    } else {
        return;
    }
})


