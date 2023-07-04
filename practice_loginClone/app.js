const checkIcon = document.querySelector(".check-icon");
const ipIcon = document.querySelector(".ip-icon");

checkIcon.addEventListener("click", function () {
  checkIcon.classList.toggle("checked");
});

ipIcon.addEventListener("click", function () {
  ipIcon.classList.toggle("checked");
});

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function () {
  const idInput = document.querySelector(".id-text");
  const pwInput = document.querySelector(".pw-text");

  let form = document.querySelector(".login-id form");
  form.submit();
});
