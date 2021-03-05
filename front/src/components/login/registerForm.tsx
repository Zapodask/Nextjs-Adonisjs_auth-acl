import React from 'react'
import { Container, Form, Input } from '@/styles/components/login/registerForm'

import { HandleRegister } from '@/services/authHandles'

const RegisterForm = () => {
    return (
        <Container>
            <h1>Registrar</h1>
            <Form onSubmit={HandleRegister}>
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
