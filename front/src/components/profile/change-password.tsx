import React from 'react'
import { Container, Form, Input } from '@/styles/components/profile/changePassword'
import { HandleChangePassword } from '@/services/authHandles'

const ChangePassword = () => {
    return (
        <Container>
            <Form onSubmit={HandleChangePassword} >
                <Input name='password' type='password' placeholder='Senha antiga' />
                <Input name='newPassword' type='password' placeholder='Nova senha' />
                <Input name='newPassword_confirmation' type='password' placeholder='Confirmar nova senha' />
                <button type='submit'>Trocar</button>
            </Form>
        </Container>
    )
}

export default ChangePassword
