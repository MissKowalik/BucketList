import { user } from "../variables.js";
// selecting form elements
const loginForm = document.querySelector("form");
const nameInput = document.getElementById("username");
const pwInput = document.getElementById("password");
const toggleBtn = document.querySelector(".toggle-password");
const nameErrMsg = document.getElementById("username-error-message");
const pwErrMss = document.getElementById("password-error-message");
// implementing the show/hide password toggle
toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener("click", () => {
    if (pwInput.type === "password") {
        pwInput.type = "text";
    }
    else if (pwInput.type === "text") {
        pwInput.type = "password";
    }
});
// function to validate name input
function isNameValid() {
    const trimmedUser = nameInput.value.trim();
    // name validation
    if (trimmedUser === "") {
        nameErrMsg.style = "display: block";
        return false;
    }
    else {
        nameErrMsg.style = "display: none";
        return true;
    }
}
;
// function to validate password input
function isPwValid() {
    const trimmedPw = pwInput.value.trim();
    const pwLength = pwInput.value.length;
    const minPwLength = 4;
    // password validation
    if (pwLength < minPwLength || trimmedPw === "") {
        pwErrMss.style = "display: block";
        return false;
    }
    else {
        pwErrMss.style = "display: none";
        return true;
    }
}
;
// live validation
nameInput.addEventListener("input", isNameValid);
pwInput.addEventListener("input", isPwValid);
// form submission
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameValid = isNameValid();
    const pwValid = isPwValid();
    if (nameValid && pwValid) {
        user.name = nameInput.value.trim(); // storing username globally
        window.location.replace('./dashboard.html'); //redirect user to dashboard
    }
    else {
        return;
    }
});
//# sourceMappingURL=Login.js.map