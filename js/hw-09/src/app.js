const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

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