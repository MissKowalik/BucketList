// selecting elements
const userName = document.getElementById("user-name");
// display logged-in Username
const storedName = localStorage.getItem("username");
if (storedName) {
    userName.textContent = storedName;
}
export {};
//# sourceMappingURL=Dashboard.js.map