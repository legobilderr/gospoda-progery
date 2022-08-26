const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const target = document.querySelector("#gallery");
const createGalleryItem = ({ url, alt }) => {
  const imageEl = document.createElement("img");
  imageEl.alt = alt;
  imageEl.src = url;
  imageEl.width = 400;
  const imageWrapEl = document.createElement("li");
  imageWrapEl.appendChild(imageEl);
  return imageWrapEl;
};

target.append(...images.map(createGalleryItem));
