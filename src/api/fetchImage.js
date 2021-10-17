import axios from 'axios';

export const fetchImage = async(query) => {
    const IMAGE_API_KEY = process.env.REACT_APP_IMAGE_API;
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=jXSmnU6rQ6pAWG7ryXStpZof_Mlm72dHlyxcy6Hfm6M`;
    const {data} = await axios.get(URL);
    return data;
}