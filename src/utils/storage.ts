import { name } from "../variables.js";
import { Dream } from "../models/Dream.js";

// display logged-in Username
export function displayUserName(userName: HTMLSpanElement) {
    const storedName = localStorage.getItem("username");
    if (storedName) {
        userName.textContent = storedName;
    } else {
        // Fallback in case there is no storedName
        userName.textContent = name;
    }
}

export function loadDreams(fallbackDreams: Dream[]): Dream[] {
    const storedDreams = localStorage.getItem("dreams");
    
    if (storedDreams) {
        const dreamsFromStorage = JSON.parse(storedDreams) as Dream[];
        return dreamsFromStorage;
    } else {
        return fallbackDreams;
    } 
}