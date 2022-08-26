const ref = {
  input: document.querySelector("#controls>input"),
  createbutton: document.querySelector("[data-action=render]"),
  clearbutton: document.querySelector("[data-action=destroy]"),
  targetBox: document.querySelector("#boxes"),
};

ref.createbutton.addEventListener("click", createElements);
ref.clearbutton.addEventListener("click", clearEllements);

function createElements() {
  const numbers = new Array(ref.input.valueAsNumber).fill(0);
  const errayOfElements = numbers.reduce((acc, curent) => {
    const element = document.createElement("div");
    if (acc.length) {
      element.style.width =
        parseInt(acc[acc.length - 1].style.width) + 10 + "px";
      element.style.height =
        parseInt(acc[acc.length - 1].style.height) + 10 + "px";
    } else {
      element.style.width = "30px";
      element.style.height = "30px";
    }
    element.style.background = generateBg();
    acc.push(element);
    return acc;
  }, []);
  ref.targetBox.append(...errayOfElements);
}

function clearEllements() {
  ref.targetBox.innerHTML = "";
}

function generateBg() {
  return (
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")"
  );
}
