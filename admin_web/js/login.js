const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");

const togglePassword = document.getElementById("togglePassword");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClose = document.getElementById("eyeClose");

const ADMIN_ACCOUNT = {
  email: "admin@gmail.com",
  password: "123456"
};

/* show/hide password */
if (togglePassword) {
  togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      eyeOpen.style.display = "none";
      eyeClose.style.display = "block";
    } else {
      password.type = "password";
      eyeOpen.style.display = "block";
      eyeClose.style.display = "none";
    }
  });
}

/* login */
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "" || passwordValue === "") {
      error.style.color = "red";
      error.textContent = "Please enter both email and password.";
      return;
    }

    if (
      emailValue === ADMIN_ACCOUNT.email &&
      passwordValue === ADMIN_ACCOUNT.password
    ) {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");

      setTimeout(() => {
        window.location.href = "./programmes.html";
      }, 800);
    } else {
      error.style.color = "red";
      error.textContent = "Invalid email or password.";
    }
  });
}