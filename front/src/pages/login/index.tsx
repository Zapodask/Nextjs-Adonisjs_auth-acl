import React from 'react'
import Header from '@/components/layout'

import LoginForm from '@/components/login/loginForm'
import RegisterForm from '@/components/login/registerForm'

import { Container } from '@/styles/pages/login'

const Login = () => {
    return (
        <Header title='Login'>
            <Container>
                <LoginForm />

                <RegisterForm />
            </Container>
        </Header>
    )
}

export default Login