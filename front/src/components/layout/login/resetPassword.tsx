import React from 'react'
import { Container, Form, Input } from '@/styles/components/forgot-password/resetPassword'

import { HandleResetPassword } from '@/utils/authHandles'

interface SubmitData {
    password: string
    password_confirmation: string
}

const ResetPassword = (token: any) => {
    function Submit(data: SubmitData) {
        HandleResetPassword({ token: token, data: data })
    }

    return (
        <Container>
            <Form onSubmit={Submit} >
                <Input name='password' label='Senha antiga' />
                <Input name='password_confirmation' label='Nova senha' />
                <button type='submit'>Trocar</button>
            </Form>
        </Container>
    )
}

export default ResetPassword
