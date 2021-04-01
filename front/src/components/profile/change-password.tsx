import React from 'react'
import { Container, Form } from '@/styles/components/profile/changePassword'

import { HandleChangePassword } from '@/utils/authHandles'
import { Input } from '@/components/input'

const ChangePassword = () => {
    return (
        <Container>
            <Form onSubmit={HandleChangePassword} >
                <Input name='password' type='password' label='Senha antiga' />
                <Input name='newPassword' type='password' label='Nova senha' />
                <Input name='newPassword_confirmation' type='password' label='Confirmar nova senha' />
                <button type='submit'>Trocar</button>
            </Form>
        </Container>
    )
}

export default ChangePassword
