"use strict";
// när användaren kommer in på sidan (DOMen laddats in), ska den omdirigeras till login.html 
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.location.replace('pages/login.html');
    }, 4000); // 4000 ms = 4 sekunder
});
//# sourceMappingURL=index.js.map