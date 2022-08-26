const ref = {
  iput: document.querySelector("#font-size-control"),
  targetSpan: document.querySelector("#text"),
};

ref.iput.addEventListener("change", updateSpanFontsize);

function updateSpanFontsize(event) {
  console.log(event.currentTarget.value);
  ref.targetSpan.style.fontSize = event.currentTarget.value + "px";
}
