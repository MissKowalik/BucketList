import { user } from "../variables.js";
// selecting form elements
const loginForm = document.querySelector("form");
const nameInput = document.getElementById("username");
const pwInput = document.getElementById("password");
const toggleBtn = document.querySelector(".toggle-password");
const nameErrMsg = document.getElementById("username-error-message");
const passwordErrMss = document.getElementById("password-error-message");
// implementing the show/hide password toggle
toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener("click", () => {
    if (pwInput.type === "password") {
        pwInput.type = "text";
    }
    else if (pwInput.type === "text") {
        pwInput.type = "password";
    }
});
// adding event listener for form submission
loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const trimmedUser = nameInput.value.trim();
    const passwordLength = pwInput.value.length;
    const minPwLength = 4;
    // resetting error messages
    nameErrMsg.style.display = "none";
    passwordErrMss.style.display = "none";
    // name validation
    if (trimmedUser === "") {
        nameErrMsg.style = "display: block";
        return;
    }
    // password validation
    if (passwordLength < minPwLength) {
        passwordErrMss.style = "display: block";
        return;
    }
    // if all okay 
    user.name = trimmedUser; // storing username globally
    window.location.replace('./dashboard.html'); //redirect user to dashboard
});
//# sourceMappingURL=Login.js.map