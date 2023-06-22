export const generateError = (id, msg) => {
  let input = document.querySelector(`#${id}`);
  let formGroup = document.querySelector(`#${id}-form-group`);
  formGroup.classList.add("error-activated");
  input.classList.add("error-activated");
  let msgText = input.nextElementSibling.nextElementSibling;
  msgText.classList.add("error-activated");
  msgText.innerText = msg;
};
export const removeError = (id) => {
  let input = document.querySelector(`#${id}`);
  let formGroup = document.querySelector(`#${id}-form-group`);
  formGroup.classList.remove("error-activated");
  input.classList.remove("error-activated");
  let msgText = input.nextElementSibling.nextElementSibling;
  msgText.classList.remove("error-activated");
  msgText.innerText = "";
};
