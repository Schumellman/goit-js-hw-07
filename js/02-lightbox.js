import { galleryItems } from './gallery-items.js';
// Change code below this line

const listBox = document.querySelector('ul.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"></a>
    </li>`).join('');
}
createMarkup(galleryItems);

listBox.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
 new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    })
