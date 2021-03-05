import api from '@/services/api'
import { login, saveRole, saveRefreshToken, saveUser } from '@/services/auth'

import Router from 'next/Router'
import User from '@/interfaces/User'

interface LoginData {
    email: string
    password: string
}

interface TokenResponse {
    data: {
        token: {
            token: string
            refreshToken: string
        }
        user: User
    }
}

function Login (data: TokenResponse) {
    const res = data.data

    login(res.token.token)
    saveRefreshToken(res.token.refreshToken)
    saveRole(res.user.role)
    saveUser(res.user)

    Router.back()
}

export const HandleLogin = (data: LoginData) => {
    api.post('auth/login', data)
        .then((response: TokenResponse) => {
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

export const HandleRegister = (data: RegisterData) => {
    api.post('auth/register', data)
        .then((response: TokenResponse) => {
            Login(response)
        }).catch((error) => {
            return error
        })
}

export const HandleSendChangeEmail = () => {
    api.post('auth/send-change-email')
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        })
}

interface ChangeEmailData {
    token: string
    data: {
        email: string
    }
}

export const HandleChangeEmail = ({token, data}: ChangeEmailData) => {
    api.put(`auth/change-email?token=${token}`, data)
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        })
}

interface ChangePasswordData {
    password: string
    newPassword: string
    newPassword_confirmation: string
}

export const HandleChangePassword = (data: ChangePasswordData) => {
    api.put('auth/change-password', data)
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        })
}

interface ForgotPasswordData {
    email: string
}

export const HandleForgotPassword = (data: ForgotPasswordData) => {
    api.post('auth/forgot-password', data)
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        })
}

interface ResetPasswordData {
    token: string
    data: {
        password: string
        password_confirmation: string
    }
}

export const HandleResetPassword = ({token, data}: ResetPasswordData) => {
    api.put(`auth/reset-password?token=${token}`, data)
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        })
}