const refs = {
  input: document.querySelector("#name-input"),
  targetSpan: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", updateSpan);

function updateSpan(event) {
  refs.targetSpan.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "незнакомец";
}
