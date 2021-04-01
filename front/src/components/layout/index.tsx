import React, { ReactNode } from 'react'
import { Container } from '@/styles/components/layout'

import Head from 'next/Head'
import NavBar from './navbar'

interface Props {
    title: string
    children: ReactNode
}

const Layout = ({title, children}: Props) => {
    return (
        <Container>
            <Head>
                <title>{title}</title>
            </Head>

            <NavBar />
            
            <main>
                {children}
            </main>
        </Container>
    )
}

export default Layout