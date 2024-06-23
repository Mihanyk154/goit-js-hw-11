export function getImage(image) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '44401278-613f3c82386bcb5b22d8a73ae',
        q: image,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
    return fetch(url).then(data => data.json());
}