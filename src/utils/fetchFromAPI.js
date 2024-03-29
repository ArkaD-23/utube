import axios from "axios";

export const URL = `https://youtube-v31.p.rapidapi.com`;


const options = {
  method: 'GET',
  params: {
   /* q: 'video',
    part: 'snippet',*/
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${URL}/${url}`,options);

    return data;
};