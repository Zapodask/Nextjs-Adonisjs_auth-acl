import api from '@/services/api'
import Cookie from 'js-cookie'

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

    Cookie.set('credentials', {
        token: res.token.token,
        refreshToken: res.token.refreshToken,
        role: res.user.role
    })

    Cookie.set('user', res.user)

    Router.back()
}

export const HandleLogin = (data: LoginData, setOpen: (open: boolean) => void) => {
    api.post('auth/login', data)
        .then((response: TokenResponse) => {
            Login(response)

            setOpen(false)
            Router.push('/')

            return true
        }).catch((error) => {
            return error
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
            return response
        }).catch((error) => {
            return error
        })
}

export const handleLogout = () => {
    Cookie.remove('credentials')
    Cookie.remove('user')

    Router.push('/')
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

export const HandleRefreshToken = () => {
    api.post('/auth/refresh', {
        refresh_token: Cookie.getJSON('credentials').refreshToken
    }).then((response) => {
        if (response !== undefined) {
            Login(response)
        }
    })
}