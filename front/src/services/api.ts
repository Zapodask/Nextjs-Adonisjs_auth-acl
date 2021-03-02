import axios from 'axios'
import { getToken, getRefreshToken } from './auth'

import refreshToken from '@/services/refreshToken'

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333'
})

api.interceptors.request.use(async config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(async (response: any) => {
  return response
}, async function (error) {
  const response = error.response
  const config = response.config
  var res
  
  if (response.status === 401 && getRefreshToken() !== null && config.url !== '/auth/refresh') {
    refreshToken()
    
    switch (response.config.method) {
      case 'get':
        res = await api.get(config.url)
        break
      case 'post':
        res = await api.post(config.url, config.data)
        break
      case 'put':
        res = await api.put(config.url, config.data)
        break
      case 'delete':
        res = await api.delete(config.url)
        break
      default:
        res = response
    }
  }

  return res
})

export default api