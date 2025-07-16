// function to validate name input
export function isNameValid(name: string, errorEl: HTMLElement): boolean {
    const trimmedUser = name.trim();

    if (trimmedUser === "") {
        errorEl.style = "display: block";
        return false;
    } else {
        errorEl.style = "display: none";
        return true;
    }
}

// function to validate password input
export function isPwValid(password: string, errorEl: HTMLElement, minLength = 4): boolean {
    const trimmedPw = password.trim();

    if (trimmedPw.length < minLength || trimmedPw === "") {
        errorEl.style = "display: block";
        return false;
    } else {
        errorEl.style = "display: none";
        return true;
    }
}

// dream input validation
export function isDreamValid(dream: string, errorEl: HTMLParagraphElement): boolean {
    const trimmedDream = dream.trim();

    if (trimmedDream === "") {
        errorEl.style = "display: block";
        return false;
    } else {
        errorEl.style = "display: none";
        return true;
    }
}

// select dream theme validation
export function isThemeValid(theme: string, errorEl: HTMLParagraphElement): boolean {
    const selectedTheme = theme;

    if (!selectedTheme) {
        errorEl.style = "display: block";
        return false;
    } else {
        errorEl.style = "display: none";
        return true;
    }
}