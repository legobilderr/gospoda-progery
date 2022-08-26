const liItem = document.querySelectorAll("li.item");

console.log(`У списку ${liItem.length} категорії.`);

liItem.forEach((element) =>
  console.log(`Категорія: ${element.children[0].textContent}
  - Кількість елементів:${element.children[1].childElementCount}`)
);
