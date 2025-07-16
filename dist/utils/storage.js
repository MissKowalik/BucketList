import { name } from "../variables.js";
// display logged-in Username
export function displayUserName(userName) {
    const storedName = localStorage.getItem("username");
    if (storedName) {
        userName.textContent = storedName;
    }
    else {
        // Fallback in case there is no storedName
        userName.textContent = name;
    }
}
//# sourceMappingURL=storage.js.map