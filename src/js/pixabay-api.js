const API_KEY = '44401278-613f3c82386bcb5b22d8a73ae'; 

export async function fetchImages(keyword) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(keyword)}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}