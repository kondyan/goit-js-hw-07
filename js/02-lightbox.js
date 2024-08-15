import { galleryItems } from "./gallery-items.js";
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
  .join("");

gallery.insertAdjacentHTML("afterbegin", createLayot);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
