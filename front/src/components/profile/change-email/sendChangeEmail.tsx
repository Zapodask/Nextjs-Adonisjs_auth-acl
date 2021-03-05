import React from 'react'
import { Container } from '@/styles/components/profile/change-email/sendChangeEmail'

import { HandleSendChangeEmail } from '@/services/authHandles'

const SendChangeEmail = () => {
    return (
        <Container>
            <main>
                <button onClick={HandleSendChangeEmail} >Solicitar troca de email</button>
            </main>
        </Container>
    )
}

export default SendChangeEmail
