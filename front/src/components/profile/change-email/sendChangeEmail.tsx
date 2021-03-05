import React from 'react'
import { Container } from '@/styles/components/profile/change-email/sendChangeEmail'

import { HandleSendChangeEmail } from '@/services/authHandles'

const SendChangeEmail = () => {
    return (
        <Container>
            <button onClick={HandleSendChangeEmail} >Solicitar troca de email</button>
        </Container>
    )
}

export default SendChangeEmail
