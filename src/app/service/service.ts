import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const apikey = process.env.NEXT_PUBLIC_LOSTARK_API_KEY;

const instance = axios.create({
  baseURL: 'https://developer-lostark.game.onstove.com',
  headers: {
    accept: 'application/json',
    authorization: `bearer ${apikey}`,
  },
});

instance.interceptors.request.use(
  function (config) {
    config.headers!.authorization = `bearer ${apikey}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
