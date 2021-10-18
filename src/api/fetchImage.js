import axios from 'axios';

export const fetchImage = async(query) => {
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_IMAGE_API}`;
    const {data} = await axios.get(URL);
    return data;
}