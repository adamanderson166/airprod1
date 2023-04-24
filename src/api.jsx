import axios from 'axios';

const API_KEY = 'your_inworld_ai_api_key';

const instance = axios.create({
  baseURL: 'https://api.inworldai.com/', // Base URL for InWorld AI API
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default instance;
