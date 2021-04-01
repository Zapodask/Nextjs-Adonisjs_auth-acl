import React from 'react'
import Layout from '@/components/layout'

import api from '@/services/api'
import { Form } from '@unform/web'

import { Input } from '@/components/input'
import withAuth from '@/utils/withAuth'

interface User {
    name: string
    surname: string
    email: string
    password: string
    password_confirmation: string
    role: string
}

const AddUser = () => {
    const handleRegister = (data: User) => {
        api.post('admin/users', data)
            .then((response: any) => {
                console.log(response)
            })
    }

    return (
        <Layout title='Add users'>
            <h1>Adicionar usuário</h1>
            <Form onSubmit={handleRegister}>
                <p>Nome:</p>
                <Input name='name' label='Name' />
                <p>Sobrenome:</p>
                <Input name='surname' label='Surname' />
                <p>email:</p>
                <Input type='email' name='email' label='Email' />
                <p>Senha:</p>
                <Input type='password' name='password' label='Password' />
                <p>Confirmar senha:</p>
                <Input type='password' name='password_confirmation' label='Confirm password' />
                <p>Role:</p>
                <Input name='role' label='Role' />
                <br />
                <button type='submit'>Registrar</button>
            </Form>
        </Layout>
    )
}

export default withAuth({Component: AddUser, role: 'admin'})
