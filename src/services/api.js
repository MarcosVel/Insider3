import axios from 'axios';

// key 6151f6ce2c022a4f0596fbbb289c669649eabb03

// base url: https://api-ssl.bitly.com/v4/

export const key = '6151f6ce2c022a4f0596fbbb289c669649eabb03';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ key }`
  }
})

export default api;