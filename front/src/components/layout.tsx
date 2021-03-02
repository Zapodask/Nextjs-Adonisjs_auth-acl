import React, { ReactNode, useContext } from 'react'
import { Container } from '../styles/components/layout'

import { logout } from '@/services/auth'
import Router from 'next/router'

import Link from 'next/Link'
import Head from 'next/Head'

import { UserContext } from '@/contexts/UserContext'

interface Props {
    title: string
    children: ReactNode
}

const Layout = ({title, children}: Props) => {
    const { user, setUser } = useContext(UserContext)

    const handleLogout = () => {
        logout()
        setUser(null)

        Router.push('/')
    }

    return (
        <Container>
            <Head>
                <title>{title}</title>
            </Head>
            
            <header>
                <div>
                    <Link href='/'>
                        <button>
                            Home
                        </button>
                    </Link>
                    {!user ? (
                        <Link href='/login'>
                            Login
                        </Link>
                    ) : (
                        <>
                            {user.role === 'admin' || user.role === 'manager' ? (
                                <Link href='/admin/users'>
                                    Admin
                                </Link>
                            ) : null}
                            <strong>Olá {user.name}</strong>
                            <button onClick={handleLogout} >
                                Sair
                            </button>
                        </>
                    )}
                </div>
            </header>
            <main>
                {children}
            </main>
        </Container>
    )
}

export default Layout