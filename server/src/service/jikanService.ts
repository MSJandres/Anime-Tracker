import axios from "axios";

const JIKAN_BASE_URL = 'https://api.jikan.moe/v4';

//fetch title
async function fetchAnimeByTitle(title: any) {
    try {
        const response = await axios.get(`${JIKAN_BASE_URL}/anime`, {
            params: { q: title },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error in fetchAnimeByTitle:', error.message);
        throw new Error('Failed to fetch anime by title');
    }
}

//fetch by Jikan ID
async function fetchAnimeById(id: any) {
    try {
        const response = await axios.get(`${JIKAN_BASE_URL}/anime/${id}`);
        return response.data;
    } catch (error: any) {
        console.error('Error in fetchAnimeById:', error.message);
        throw new Error('Failed to fetch anime by ID');
    }
}

//Fetch top anime
async function fetchTopAnime(page = 1) {
    try {
        const response = await axios.get(`${JIKAN_BASE_URL}/top/anime`, {
            params: { page },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error in fetchTopAnime:', error.message);
        throw new Error('Failed to fetch top anime');
    }
}

module.exports = {
    fetchAnimeByTitle,
    fetchAnimeById,
    fetchTopAnime,
};