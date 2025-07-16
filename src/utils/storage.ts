// display logged-in Username
export function displayUserName(userName: HTMLSpanElement) {
    const storedName = localStorage.getItem("username");
    if (storedName) {
        userName.textContent = storedName;
    }
}