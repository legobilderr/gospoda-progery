const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const target = document.querySelector("#ingredients");

const liElErr = ingredients.map((ingredisent) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredisent;
  return liElement;
});

target.append(...liElErr);

for (let ingredient of ingredients) {
  // target.insertAdjacentHTML("afterend", `<li>${ingredient}</li>`);
  // target.innerHTML += `<li>${ingredient}</li>`;
}
