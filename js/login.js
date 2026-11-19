const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "Alvaro" && password === "1234") {
        window.location.href = "./pages/home.html";
    } else {
        alert("Wrong password");
    }
});