import React, { ElementType } from 'react'
import Router from 'next/router'

import Cookie from 'js-cookie'

interface Props {
    Component: ElementType
    role: string
}

const withAuth = ({Component, role}: Props) => {
    const wrapper = async (props: any) => {
        const Role = await Cookie.getJSON('credentials').role

        switch (role) {
            case 'admin':
                if (Role === 'admin') {
                    return
                } else {
                    Router.replace('/')
                }
            case 'manager':
                if (Role === 'admin' || Role === 'manager') {
                    return
                } else {
                    Router.replace('/')
                }
            case 'client':
                if (Role === 'client' || Role === 'admin' || Role === 'manager') {
                    return
                } else {
                    Router.replace('/')
                }
            default:
                Router.replace('/login')
        }

        return <Component {...props} />
    }

    return wrapper
}

export default withAuth