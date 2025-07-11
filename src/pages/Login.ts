// Det första användaren gör är att logga in med ett namn. Vi använder ingen backend eller inloggning på riktigt, utan:

// ✅ Användaren skriver in sitt namn
// ✅ Det namnet sparas i en global variabel (name) som resten av appen kan använda
// ✅ Lösenordet finns bara som ett formulärfält och ska kunna visas/döljas med ett klick
// 🧪 Validering
// Namn får inte vara tomt
// Lösenord måste innehålla minst 4 tecken (t.ex.)


// selecting form elements
const loginForm = document.querySelector("form");
const userName = document.getElementById("username") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const toggleBtn = document.querySelector(".toggle-password");
const nameErrMsg = document.getElementById("username-error-message") as HTMLParagraphElement;
const passwordErrMss = document.getElementById("password-error-message") as HTMLParagraphElement;

// implementing the show/hide password toggle
toggleBtn?.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
    } else if (password.type === "text") {
        password.type = "password";
    };
});

// adding event listener for form submission
loginForm?.addEventListener("submit", (event: Event) => {
    event.preventDefault()

    const trimmedUser = userName.value.trim();
    const passwordLength = password.value.length;

    // name validation
    if (trimmedUser === "") {
        nameErrMsg.style = "display: display";
        return;
    };

    // password validation
    if (passwordLength < 4) {
        passwordErrMss.style = "display: display";
        return;
    };
})