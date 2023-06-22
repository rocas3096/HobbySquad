 let visibleIcon = document.querySelector(".password-visible");
let notVisibleIcon = document.querySelector(".password-not-visible");
let passwordInput = document.getElementById("login-password");
let regPasswordInput = document.getElementById("register-password");
let registerConfirm = document.getElementById("register-confirm");

export const handlePasswordVisibility = () => {
  visibleIcon &&
    visibleIcon.addEventListener("click", (e) => {
      e.target.classList.remove("active");
      notVisibleIcon.classList.add("active");
      passwordInput && (passwordInput.type = "password");
      regPasswordInput && (regPasswordInput.type = "password");
      regPasswordInput && (registerConfirm.type = "password");
    });
  notVisibleIcon &&
    notVisibleIcon.addEventListener("click", (e) => {
      e.target.classList.remove("active");
      visibleIcon.classList.add("active");
      passwordInput && (passwordInput.type = "input");
      regPasswordInput && (regPasswordInput.type = "input");
      regPasswordInput && (registerConfirm.type = "input");
    });
};
