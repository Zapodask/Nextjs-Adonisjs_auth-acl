import React from 'react'
import Layout from '@/components/layout'

import withAuth from '@/utils/withAuth'
import Information from '@/components/profile/information'

import ChangeEmail from '@/components/profile/change-email/sendChangeEmail'
import ChangePassword from '@/components/profile/change-password'

import { Container } from '@/styles/pages/profile'

const Profile = () => {
    return (
        <Layout title='Profile'>
            <Container>
                <main>
                    <Information />
                </main>
                <main>
                    <ChangeEmail />
                </main>
                <main>
                    <ChangePassword />
                </main>
            </Container>
        </Layout>
    )
}

export default withAuth({Component: Profile, role: 'client'})
