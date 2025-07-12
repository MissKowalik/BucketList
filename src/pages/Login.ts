import { user } from "../variables.js";

// selecting form elements
const loginForm = document.querySelector("form");
const nameInput = document.getElementById("username") as HTMLInputElement;
const pwInput = document.getElementById("password") as HTMLInputElement;
const toggleBtn = document.querySelector(".toggle-password");
const nameErrMsg = document.getElementById("username-error-message") as HTMLParagraphElement;
const passwordErrMss = document.getElementById("password-error-message") as HTMLParagraphElement;

// implementing the show/hide password toggle
toggleBtn?.addEventListener("click", () => {
    if (pwInput.type === "password") {
        pwInput.type = "text";
    } else if (pwInput.type === "text") {
        pwInput.type = "password";
    };
});

// adding event listener for form submission
loginForm?.addEventListener("submit", (event: Event) => {
    event.preventDefault()

    const trimmedUser = nameInput.value.trim();
    const passwordLength = pwInput.value.length;

    // resetting error messages
    nameErrMsg.style.display = "none";
    passwordErrMss.style.display = "none";

    // name validation
    if (trimmedUser === "") {
        nameErrMsg.style = "display: block";
        return;
    };

    // password validation
    if (passwordLength < 4) {
        passwordErrMss.style = "display: block";
        return;
    };

    // if all okay 
    user.name = trimmedUser; // storing username globally
    window.location.replace('./dashboard.html'); //redirect user to dashboard
});