// function to validate name input
export function isNameValid(name, errorEl) {
    const trimmedUser = name.trim();
    if (trimmedUser === "") {
        errorEl.style = "display: block";
        return false;
    }
    else {
        errorEl.style = "display: none";
        return true;
    }
}
// function to validate password input
export function isPwValid(password, errorEl, minLength = 4) {
    const trimmedPw = password.trim();
    if (trimmedPw.length < minLength || trimmedPw === "") {
        errorEl.style = "display: block";
        return false;
    }
    else {
        errorEl.style = "display: none";
        return true;
    }
}
// dream input validation
export function isDreamValid(dream, errorEl) {
    const trimmedDream = dream.trim();
    if (trimmedDream === "") {
        errorEl.style = "display: block";
        return false;
    }
    else {
        errorEl.style = "display: none";
        return true;
    }
}
// select dream theme validation
export function isThemeValid(theme, errorEl) {
    const selectedTheme = theme;
    if (!selectedTheme) {
        errorEl.style = "display: block";
        return false;
    }
    else {
        errorEl.style = "display: none";
        return true;
    }
}
//# sourceMappingURL=validation.js.map