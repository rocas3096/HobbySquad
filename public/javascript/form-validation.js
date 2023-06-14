import { generateError, removeError } from "./error-handling.js";
import { handlePasswordVisibility } from "./password-visibility.js";
import { validateEmail } from "./validate-email.js";

// handles password visibility
handlePasswordVisibility();
// handle login form

const baseAuthUrl = "/api/auth";
let loginForm = document.querySelector(".login-form");
let registerForm = document.querySelector(".register-form");

// handle logging in
const removeAllErrors = (...inputs) => {
  inputs.forEach((input) => {
    removeError(input);
  });
};
const removeValues = (...inputs) => {
  inputs.forEach((input) => {
    document.querySelector(`#${input}`).value = "";
  });
};
loginForm &&
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    removeAllErrors("login-password", "login-username");
    const formSubmitter = document.querySelector(".auth-btn-login");
    const loading = (cond) => {
      if (cond) {
        formSubmitter.disabled = true;
        formSubmitter.classList.add("loading");
      } else {
        formSubmitter.disabled = false;
        formSubmitter.classList.remove("loading");
      }
    };
    loading(true);
    setTimeout(async () => {
      loading(false);
      const formData = new FormData(loginForm, formSubmitter);
      let data = {};

      for (const [key, value] of formData) {
        data = { ...data, [key]: value };
      }
      if (data.password.length < 8) {
        generateError(
          "login-password",
          "Password should be greater than 8 characters"
        );
      }

      let results = await fetch(`${baseAuthUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let res = await results.json();
      console.log(res);
      if (res.error && res.type === "user not found") {
        generateError("login-username", res.error);
        return;
      }

      if (res.error && res.type === "unauthorized") {
        generateError("login-password", res.error);

        return;
      }
      removeValues("login-password", "login-username");
      window.location.replace("/user-panel");
    }, 1600);
  });
registerForm &&
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    removeAllErrors(
      "register-password",
      "register-username",
      "register-email",
      "register-confirm"
    );
    const formSubmitter = document.querySelector(".auth-btn-register");
    const loading = (cond) => {
      if (cond) {
        formSubmitter.disabled = true;
        formSubmitter.classList.add("loading");
      } else {
        formSubmitter.disabled = false;
        formSubmitter.classList.remove("loading");
      }
    };
    loading(true);
    setTimeout(async () => {
      loading(false);
      const formData = new FormData(registerForm, formSubmitter);
      let data = {};
      for (const [key, value] of formData) {
        data = { ...data, [key]: value };
      }
      if (data.password.length < 8) {
        return generateError(
          "register-password",
          "Password should be greater than 8 characters"
        );
      }
      if (validateEmail(data.username)) {
        return generateError(
          "register-username",
          "Please use emails in the email input"
        );
      }

      if (data.password !== data.confirm) {
        generateError("register-password", "Passwords do not match");
        return generateError("register-confirm", "Passwords do not match");
      }
      let results = await fetch(`${baseAuthUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res = await results.json();

      if (res.error && res.type === "username exists") {
        return generateError("register-username", res.error);
      }
      if (res.error && res.type === "email exists") {
        return generateError(
          "register-email",
          "Email already exists. Please sign in or choose another email"
        );
      }
      console.log(res);
      if (res.type === "success") {
        window.location.replace("/user-panel");
      }
    }, 1600);
  });
