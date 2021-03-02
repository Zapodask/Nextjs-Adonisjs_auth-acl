import api from '@/services/api'
import { login, saveRole, saveRefreshToken, saveUser } from '@/services/auth'

import Router from 'next/Router'
import User from '@/interfaces/User'

interface LoginData {
    email: string
    password: string
}

interface Response {
    data: {
        token: {
            token: string
            refreshToken: string
        }
        user: User
    }
}

function Login (data: Response) {
    const res = data.data

    login(res.token.token)
    saveRefreshToken(res.token.refreshToken)
    saveRole(res.user.role)
    saveUser(res.user)

    Router.back()
}

export const useLogin = (data: LoginData) => {
    api.post('auth/login', data)
        .then((response: Response) => {
            Login(response)
        }).catch(() => {
            alert('Email ou senha incorreto.')
        })
}

interface RegisterData {
    name: string
    surname: string
    email: string
    password: string
    password_confirmation: string
}

export const useRegister = (data: RegisterData) => {
    api.post('auth/register', data)
        .then((response: Response) => {
            Login(response)
        }).catch((error) => {
            console.log(error)
        })
}