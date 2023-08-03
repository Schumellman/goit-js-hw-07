import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}"  data-source="${original}" alt="${description}" width=300>
        </a>
    </li>`).join('');
}
createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

container.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();
    const origImg = evt.target.dataset.source;
    if (evt.target === evt.currentTarget) {
        return;
    }
    onOpenOrigImg(origImg);
}

function onOpenOrigImg(origImg) {
    const instance = basicLightbox.create(`
	<div>
        <img src="${origImg}" width="1000" heigth="600">
    </div>
`,
    { onShow: (instance) => { document.addEventListener('keydown', onEvtKey) } },
    { closeShow: (instance) => { document.removeEventListener('keydown', onEvtKey) } })
    instance.show();

    function onEvtKey(e) {
        if (e.code === 'Escape')
            return instance.close();
    }
}
