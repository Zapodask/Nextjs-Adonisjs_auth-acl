import React from 'react'
import Header from '@/components/layout'

import protectRoute from '@/services/protectRoute'
import Information from '@/components/profile/information'

import ChangeEmail from '@/components/profile/change-email'
import ChangePassword from '@/components/profile/change-password'

import { Container } from '@/styles/pages/profile'

const Profile = () => {
    protectRoute('client')

    return (
        <Header title='Profile'>
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
        </Header>
    )
}

export default Profile
