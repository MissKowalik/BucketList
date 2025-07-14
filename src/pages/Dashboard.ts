import { user } from "../variables.js";

// selecting elements
const userName = document.getElementById("user-name") as HTMLSpanElement;

// display logged-in Username
const storedName = localStorage.getItem("username");
if (storedName) {
    userName.textContent = storedName;
}