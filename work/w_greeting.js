const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDE = "hide";
const NAME_KEY = "username";

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hide");
    const username = loginInput.value;
    localStorage.setItem(NAME_KEY, username);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(NAME_KEY);
    greeting.innerText = "안녕하세요, " + username + "님!";
    greeting.classList.remove("hide");
}

const saveUsername = localStorage.getItem(NAME_KEY);

if (saveUsername === null) {
    loginForm.classList.remove("hide");
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreetings();
}