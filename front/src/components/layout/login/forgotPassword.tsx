import React from 'react'
import { Modal, Slide, Form, Input } from '@/styles/components/layout/login/forgotPassword'

import { HandleForgotPassword } from '@/utils/authHandles'

interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

const ForgotPassword = ({open, setOpen}: Props) => {
    return (
        <Modal open={open} onClose={() => setOpen(false)} >
            <Slide direction='up' timeout={500} in={open} >
                <Form onSubmit={HandleForgotPassword}>
                    <Input name='email' label='email' />
                    <button type='submit' >Trocar</button>
                </Form>
            </Slide>
        </Modal>
    )
}

export default ForgotPassword
