import React from 'react'
import Layout from '@/components/layout'

import RegisterForm from '@/components/register'
import { Container } from '@/styles/pages/register'

const Register = () => {
    return (
        <Layout title='Register'>
            <Container>
                <RegisterForm />
            </Container>
        </Layout>
    )
}

export default Register