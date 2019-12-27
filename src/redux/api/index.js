import axios from 'axios';

const baseUrl = 'https://www.omdbapi.com/?apiKey=1a69d086';

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseUrl + url,
    data,
    headers
})
