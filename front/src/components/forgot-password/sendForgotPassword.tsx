import React from 'react'
import { Container, Form, Input } from '@/styles/components/forgot-password/sendForgotPassword'

import { HandleForgotPassword } from '@/services/authHandles'

const SendForgotPassword = () => {
    return (
        <Container>
            <Form onSubmit={HandleForgotPassword}>
                <Input name='email' placeholder='email' />
                <button type='submit' >Trocar</button>
            </Form>
        </Container>
    )
}

export default SendForgotPassword
