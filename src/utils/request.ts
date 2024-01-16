import Axios from 'axios'

export const request = Axios.create({
  baseURL: '/api',
})
