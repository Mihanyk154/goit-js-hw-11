export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}

export function displayImages(images) {
    const gallery = document.querySelector('.gallery');
    images.forEach(image => {
        const card = createImageCard(image);
        gallery.appendChild(card);
    });
}

function createImageCard(image) {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageElement = document.createElement('img');
    imageElement.src = image.webformatURL;
    imageElement.alt = image.tags;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    cardInfo.innerHTML = `
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
    `;

    card.appendChild(imageElement);
    card.appendChild(cardInfo);

    return card;
}

export function showMessage(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight'
    });
}