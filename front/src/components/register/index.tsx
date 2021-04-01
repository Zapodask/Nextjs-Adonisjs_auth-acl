import React from 'react'
import { Container, Form } from '@/styles/components/register'

import { Input } from '@/components/input'
import { HandleRegister } from '@/utils/authHandles'

const RegisterForm = () => {
    return (
        <Container>
            <h1>Registrar</h1>
            <Form onSubmit={HandleRegister}>
                <Input name='name' label='Nome' />
                <Input name='surname' label='Sobrenome' />
                <Input type='email' name='email' label='Email' />
                <Input type='password' name='password' label='Senha' />
                <Input type='password' name='password_confirmation' label='Confirmar senha' />
                <br />
                <button type='submit'>Registrar</button>
            </Form>
        </Container>
    )
}

export default RegisterForm
