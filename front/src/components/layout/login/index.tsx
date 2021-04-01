import React, { useState } from 'react'
import { Modal, Slide, Form, ForgotButton } from '@/styles/components/layout/login'

import { Input } from '@/components/input'
import { HandleLogin } from '@/utils/authHandles'

import ForgotPassword from './forgotPassword'

interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

const Login = ({open, setOpen}: Props) => {
    const [openForgot, setOpenForgot] = useState<boolean>(false)

    function submit (data: any) {
        HandleLogin(data, setOpen)
    }

    return (
        <>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Slide direction='up' timeout={500} in={open}>
                    <main>
                        <h1>Login</h1>
                        <Form onSubmit={submit}>
                            <Input type='email' id='loginEmail' name='email' label='Email' />
                            <Input type='password' id='loginPassword' name='password' label='Password' />

                            <button type='submit'>Login</button>
                        </Form>

                        <ForgotButton onClick={() => setOpenForgot(true)} >Esqueceu a senha?</ForgotButton>
                    </main>
                </Slide>
            </Modal>
            <ForgotPassword open={openForgot} setOpen={setOpenForgot} />
        </>
    )
}

export default Login
