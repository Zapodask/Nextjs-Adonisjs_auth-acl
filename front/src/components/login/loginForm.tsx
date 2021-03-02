import React from 'react'
import { Container, Form, Input } from '@/styles/components/login/loginForm'

import { useLogin } from '@/hooks/authHooks'

const LoginForm = () => {
    return (
        <Container>
            <main>
                <h1>Login</h1>
                <Form onSubmit={useLogin} >
                    <Input type='email' id='loginEmail' name='email' placeholder='Email' />
                    <Input type='password' id='loginPassword' name='password' placeholder='Password' />

                    <button type='submit'>Login</button>
                </Form>
            </main>
        </Container>
    )
}

export default LoginForm
