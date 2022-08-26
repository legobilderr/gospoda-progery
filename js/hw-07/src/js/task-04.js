let ref = {
  minus: document.querySelector("[data-action=decrement]"),
  plus: document.querySelector("[data-action=increment]"),
  target: document.querySelector("#value"),
};

let value = 0;

ref.minus.addEventListener("click", decrement);
ref.plus.addEventListener("click", increment);

function decrement(event) {
  event.preventdefault;
  value += -1;
  updateSpan();
}

function increment(event) {
  event.preventdefault;
  value += 1;
  updateSpan();
}

function updateSpan() {
  ref.target.textContent = value;
}
