import React from 'react'
import { Container, Form, Input } from '@/styles/components/profile/change-email/changeEmail'

import { HandleChangeEmail } from '@/utils/authHandles'

const ChangeEmail = (token: any) => {
    function Submit (data: { email: string }) {
        HandleChangeEmail({ token: token, data: data })
    }

    return (
        <Container>
            <Form onSubmit={Submit}>
                <Input name='email' placeholder='email' />
                <button type='submit' >Trocar</button>
            </Form>
        </Container>
    )
}

export default ChangeEmail
