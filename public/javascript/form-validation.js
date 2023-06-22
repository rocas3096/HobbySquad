import { generateError, removeError } from "./error-handling.js";

import { handlePasswordVisibility } from "./password-visibility.js";
import { validateEmail } from "./validate-email.js";

// handles password visibility
handlePasswordVisibility();
// handle login form

const baseAuthUrl = "/api/auth";
let loginForm = document.querySelector(".login-form");
let registerForm = document.querySelector(".register-form");
let commentForm = document.querySelector(".comment-form");
const searchForm = document.querySelector(".search");
const addGroup = document.querySelector("#add-group");
// handle the auth errors for login & register
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
// handling the login form submit
loginForm?.addEventListener("submit", (e) => {
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
// handling the register form submit

registerForm?.addEventListener("submit", (e) => {
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
// handling the comment form submit
commentForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formDataSubmitter = document.querySelector(".send-btn");
  const input = document.querySelector("#comment");
  const group = formDataSubmitter.id.split("-")[0];
  const user = formDataSubmitter.id.split("-")[1];
  const formData = new FormData(commentForm, formDataSubmitter);
  let data = {};
  for (let [key, value] of formData) {
    console.log(key, value);
    data = { [key]: value };
  }

  let result = await fetch(`/api/posts/${group}/${user}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let res = await result.json();
  console.log({ res });
  let postContainer = document.querySelector(".posts-container");
  const date = new Date(res.data.createdAt);
  let postDate = `${date.toDateString()} ${date.toLocaleTimeString()}`;
  const initial = res.data.user.username[0].toUpperCase();
  console.log(res);
  if (res.msg === "success") {
    let htmlEl = `
      <div style="margin-bottom:0px;" class="post-container new-post">
  <div class="post-user-data">
    <span class="post-user-img">
      ${initial}
    </span>
    <div class="post-user-name">
      <p class="name">${res.data.user.username}</p>
      <p class="date">${postDate}</p>
    </div>

  </div>
  <div class="post-content">
    <p>${res.data.content}</p>
  </div>
</div>`;
    postContainer.insertAdjacentHTML("afterbegin", htmlEl);
    input.value = "";
  }
});
// handling the search form submit
searchForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#q");
  const topSearch = document.querySelector(".top-search");
  const searchSubmitter = document.querySelector(".search-btn");
  const formData = new FormData(searchForm, searchSubmitter);
  let query;
  for (let [key, value] of formData) {
    query = value;
  }

  const results = fetch(`/api/groups/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      // const results = data.results;
      const templateContext = { data };
      // console.log(results);

      let template;
      if (data.results.length !== 0) {
        template = Handlebars.compile(`
        {{#each data.results}}
          <div class="search-result">
          <div class="search-result-header">
            <span class="title">{{this.group_name}}</span>
            <span class="members">Members: {{this.user_count}}</span>
          </div>
          <div class="search-result-body">{{description}}
        <a href="/user-panel/group/{{this.id}}">Read more</a>
      </div>
        </div>
          {{/each}}`);
      } else {
        template = Handlebars.compile(` 
            <div class="search-result">
          <p style="text-align:center; font-size:12px" class="no-results">No results
        found with that term</p>
        </div>
            
            `);
      }
      const resultsTemplate = Handlebars.compile(`
         <span class="results">Results: {{data.quantity}}</span>
          <span class="seperator">•</span>
        <span class="searching">Searching: {{data.term}}</span>`);
      const renderedHtml = template(templateContext);
      const renderedResultsHtml = resultsTemplate(templateContext);
      document.querySelector(".search-info").innerHTML = renderedResultsHtml;
      document.querySelector(".scrollable-search").innerHTML = renderedHtml;
    });

  topSearch.classList.remove("not-searching");
  // console.log(res);
});

const form = document.querySelector("#add-group");
const imageInput = document.querySelector("#group-image");
const imagePreview = document.getElementById("image-preview");

form?.addEventListener("submit", async () => {
  const formData = new FormData();
  formData.append("image", imageInput.files[0]);

  try {
    const response = await fetch("/api/groups", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const imageUrl = await response.text();
      imagePreview.src = imageUrl;
    } else {
      console.error("Image upload failed");
      // Handle failure scenario
    }
  } catch (error) {
    console.error("An error occurred during image upload:", error);
    // Handle error scenario
  }
});
