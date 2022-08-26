const ref = {
  input: document.querySelector("#validation-input"),
};

ref.input.addEventListener("change", validationCheck);
function validationCheck(event) {
  const lenth = event.currentTarget.value.length;
  const validLenth = Number(event.currentTarget.dataset.length);

  lenth === validLenth
    ? event.currentTarget.classList.toggle("valid")
    : event.currentTarget.classList.toggle("invalid");
}
