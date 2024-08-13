import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createLayot = galleryItems
  .map((e) => {
    `<li class="gallery__item">
          <a class="gallery__link" href="">
            <img
              class="gallery__image"
              src=${e.preview}
              data-source=${e.original}
              alt=${e.description}
            />
          </a>
        </li>`;
  })
  .join(" ");

gallery.insertAdjacentHTML("afterbegin", createLayot);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }
  const imgLink = event.target.dataset.source;
  console.log(imgLink);
});
