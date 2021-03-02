import React from 'react'
import { Container } from '@/styles/components/profile/information'

import useFetch from '@/hooks/useFetch'
import User from '@/interfaces/User'

const Information = () => {
    const { data, error } = useFetch<User>('profile')

    if (!data) return <h1>Carregando...</h1>

    if (error) return <h1>Erro ao carregar</h1>


    return (
        <Container>
            <div>
                <h3>Nome:</h3>
                <h2>{data.name}</h2>
            </div>
            <div>
                <h3>Sobrenome:</h3>
                <h2>{data.surname}</h2>
            </div>
            <div>
                <h3>Email:</h3>
                <h2>{data.email}</h2>
            </div>
        </Container>
    )
}

export default Information
