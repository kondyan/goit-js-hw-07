import { galleryItems } from "./gallery-items.js";
import * as SimpleLightbox from "./simple-lightbox.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createLayot = galleryItems
  .map((e) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href=${e.original}>
          <img
            class="gallery__image"
            src=${e.preview}
            alt=${e.description}
          />
        </a>
      </li>
    `;
  })
  .join(" ");

gallery.insertAdjacentHTML("afterbegin", createLayot);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }
  new SimpleLightbox({ elements: ".gallery a" });
});
