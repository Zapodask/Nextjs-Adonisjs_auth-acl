import User from '@/interfaces/User'

export const TOKEN = '@Token'
export const ROLE = '@Role'
export const REFRESH_TOKEN = '@Refresh_token'
export const USER = '@User'

export const getToken = () => localStorage.getItem(TOKEN)
export const getRole = () => localStorage.getItem(ROLE)
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN)
export const getUser = () => localStorage.getItem(USER)

export const login = (token: string) => {
  localStorage.setItem(TOKEN, token)
}

export const saveRole = (role: string) => {
  localStorage.setItem(ROLE, role)
}

export const saveRefreshToken = (refreshToken: string) => {
  localStorage.setItem(REFRESH_TOKEN, refreshToken)
}

export const saveUser = (user: User) => {
  localStorage.setItem(USER, JSON.stringify(user))
}

export const logout = () => {
  localStorage.clear()
}