import axios from 'axios'

export default axios.create({
  baseURL: process.env.TREVOR_API_URL
})
