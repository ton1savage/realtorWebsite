import axios from 'axios';


export async function fetchRealEstateData() {
  try {
    const response = await axios.request(options);
    return response.data; // Return the fetched data
  } catch (error) {
    console.error(error);
    return null; // Handle errors as needed
  }
}