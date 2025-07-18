import { user } from "../variables.js";
import { isStringValid, isPwValid } from "../utils/validation.js";
// selecting form elements
const loginForm = document.querySelector("form");
const nameInput = document.getElementById("username");
const pwInput = document.getElementById("password");
const toggleBtn = document.querySelector(".toggle-password");
const nameErrMsg = document.getElementById("username-error-message");
const pwErrMss = document.getElementById("password-error-message");
// show/hide password toggle
toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener("click", () => {
    if (pwInput.type === "password") {
        pwInput.type = "text";
    }
    else if (pwInput.type === "text") {
        pwInput.type = "password";
    }
});
// live validation
nameInput.addEventListener("input", () => isStringValid(nameInput.value, nameErrMsg));
pwInput.addEventListener("input", () => isPwValid(pwInput.value, pwErrMss));
// form submission
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameValid = isStringValid(nameInput.value, nameErrMsg);
    const pwValid = isPwValid(pwInput.value, pwErrMss);
    if (nameValid && pwValid) {
        user.name = nameInput.value.trim(); // storing username globally
        localStorage.setItem("username", user.name);
        window.location.replace('./dashboard.html'); //redirect user to dashboard
    }
    else {
        return;
    }
});
//# sourceMappingURL=Login.js.map