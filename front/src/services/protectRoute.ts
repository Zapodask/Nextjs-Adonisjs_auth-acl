import { getRole } from '@/services/auth'
import Router from 'next/router'

const protectRoute = async (role: string) => {
    const Role = await getRole()

    switch (role) {
        case 'admin':
            if (Role === 'admin') {
                return
            } else {
                Router.push('/')
            }
        case 'manager':
            if (Role === 'admin' || Role === 'manager') {
                return
            } else {
                Router.push('/')
            }
        case 'client':
            if (Role === 'client' || Role === 'admin' || Role === 'manager') {
                return
            } else {
                Router.push('/')
            }
        default:
            Router.push('/login')
    }
}

export default protectRoute