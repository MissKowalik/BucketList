"use strict";
// Det första användaren gör är att logga in med ett namn. Vi använder ingen backend eller inloggning på riktigt, utan:
// ✅ Användaren skriver in sitt namn
// ✅ Det namnet sparas i en global variabel (name) som resten av appen kan använda
// ✅ Lösenordet finns bara som ett formulärfält och ska kunna visas/döljas med ett klick
// 🧪 Validering
// Namn får inte vara tomt
// Lösenord måste innehålla minst 4 tecken (t.ex.)
// selecting form elements
const loginForm = document.querySelector("form");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const toggleBtn = document.querySelector(".toggle-password");
const nameErrMsg = document.getElementById("username-error-message");
const passwordErrMss = document.getElementById("password-error-message");
// implementing the show/hide password toggle
toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
    }
    else if (password.type === "text") {
        password.type = "password";
    }
    ;
});
//# sourceMappingURL=Login.js.map