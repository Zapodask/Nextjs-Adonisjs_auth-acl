import React from 'react'
import { Container, Form, Input } from '@/styles/components/login/registerForm'

import { useRegister } from '@/hooks/authHooks'

const RegisterForm = () => {
    return (
        <Container>
            <h1>Registrar</h1>
            <Form onSubmit={useRegister}>
                <Input name='name' placeholder='Nome' />
                <Input name='surname' placeholder='Sobrenome' />
                <Input type='email' name='email' placeholder='Email' />
                <Input type='password' name='password' placeholder='Senha' />
                <Input type='password' name='password_confirmation' placeholder='Confirmar senha' />
                <br />
                <button type='submit'>Registrar</button>
            </Form>
        </Container>
    )
}

export default RegisterForm
