import axios from 'axios';

const baseUrl = 'https://bayut.p.rapidapi.com/properties/list';

class FetchApi {
    static async getProperties() {
        try {
            const response = await axios.get(baseUrl, {
                params: {
                    locationExternalIDs: '5002,6020',
                    purpose: 'for-rent',
                    hitsPerPage: 25,
                    page: 0,
                    lang: 'en',
                    sort: 'city-level-score',
                    rentFrequency: 'monthly',
                    categoryExternalID: 4
                },
                headers: {
                    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                    'X-RapidAPI-Key': 'f8ea373f87msh889d35e737e461fp16d21fjsn5783399439da' // Replace with your RapidAPI key
                }
            });
            return response.data.hits; // Adjust based on API response structure
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export { FetchApi, baseUrl }; // Ensure FetchApi is correctly exported
