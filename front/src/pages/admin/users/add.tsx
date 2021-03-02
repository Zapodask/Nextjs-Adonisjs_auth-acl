import React from 'react'
import Header from '@/components/layout'

import api from '@/services/api'
import { Form } from '@unform/web'

import Input from '@/components/input'
import protectRoute from '@/services/protectRoute'

interface User {
    name: string
    surname: string
    email: string
    password: string
    password_confirmation: string
    role: string
}

const AddUser = () => {
    protectRoute('admin')

    const handleRegister = (data: User) => {
        api.post('admin/users', data)
            .then((response: any) => {
                console.log(response)
            })
    }

    return (
        <Header title='Add users'>
            <h1>Adicionar usuário</h1>
            <Form onSubmit={handleRegister}>
                <p>Nome:</p>
                <Input name='name' />
                <p>Sobrenome:</p>
                <Input name='surname' />
                <p>email:</p>
                <Input type='email' name='email' />
                <p>Senha:</p>
                <Input type='password' name='password' />
                <p>Confirmar senha:</p>
                <Input type='password' name='password_confirmation' />
                <p>Role:</p>
                <Input name='role' />
                <br />
                <button type='submit'>Registrar</button>
            </Form>
        </Header>
    )
}

export default AddUser
