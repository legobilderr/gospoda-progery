import { galleryItems } from "./js/modules/images";

import "./css/styles.css";
// let cache = document.createElement("CACHE");
// cache.style = "position:absolute;z-index:-1000;opacity:0;";
// document.body.appendChild(cache);
// function preloadImage(url) {
//   var img = new Image();
//   img.src = url;
//   img.style = "position:absolute";
//   cache.appendChild(img);
// }

const galleryTarget = document.querySelector(".gallery.js-gallery");
const modal = document.querySelector(".lightbox.js-lightbox");
const cloaseButton = document.querySelector(
  "button[data-action=close-lightbox]"
);
const overlay = modal.querySelector(".lightbox__overlay");
const nextButton = document.querySelector("button[data-action=next-image]");
const prevButton = document.querySelector("button[data-action=prev-image]");
let curentImageKey = null;

document.create;

const galleryLeyaut = galleryItems
  .map(({ preview, original, description }) => {
    // preloadImage(original);
    return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `;
  })
  .join(" ");

galleryTarget.insertAdjacentHTML("beforeend", galleryLeyaut);

galleryTarget.addEventListener("click", galleryItemClickHandle);

cloaseButton.addEventListener("click", cloaseModal);

overlay.addEventListener("click", cloaseModal);
nextButton.addEventListener("click", displyNextImage);
prevButton.addEventListener("click", displyPrevImage);

function galleryItemClickHandle(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  openModal(e.target);

  curentImageKey = getCurentImageKey(e.target);
}

function openModal(galleryItem) {
  modal.classList.add("is-open");
  const elimage = modal.querySelector("img");
  elimage.src = galleryItem.closest(".gallery__link").href;
  window.addEventListener("keydown", handleKeydown);
}

function handleKeydown(e) {
  if (e.type === "keydown") {
    switch (e.code) {
      case "Escape":
        cloaseModal();
        break;
      case "ArrowRight":
        displyPrevImage();
        break;
      case "ArrowLeft":
        displyNextImage();
        break;
      default:
        return;
    }
  }
}

function cloaseModal() {
  modal.querySelector(".lightbox__image").src = "";
  modal.classList.remove("is-open");
  window.removeEventListener("keydown", cloaseModal);
  curentImageKey = null;
}

function getCurentImageKey(element) {
  return galleryItems.findIndex(({ preview, original, description }) => {
    return original === element.dataset.source;
  });
}

function displyNextImage(e) {
  const elimage = modal.querySelector("img");
  if (curentImageKey < galleryItems.length - 1) {
    curentImageKey += 1;
    elimage.src = galleryItems[curentImageKey].original;
    return;
  }
  curentImageKey = 0;
  elimage.src = galleryItems[curentImageKey].original;
}
function displyPrevImage(e) {
  const elimage = modal.querySelector("img");
  if (curentImageKey > 0) {
    curentImageKey -= 1;
    elimage.src = galleryItems[curentImageKey].original;
    return;
  }
  curentImageKey = 8;
  elimage.src = galleryItems[curentImageKey].original;
}
