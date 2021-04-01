import React from 'react'
import { useRouter } from 'next/router'

import ChangeEmail from '@/components/profile/change-email/changeEmail'

const ChangeEmailToken = () => {
    const { token } = useRouter().query

    return (
        <ChangeEmail token={token} />
    )
}

export default ChangeEmailToken