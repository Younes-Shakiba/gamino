import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'dcba35505ec64fdf8bf2c1c9bc9e3828'
  }
})