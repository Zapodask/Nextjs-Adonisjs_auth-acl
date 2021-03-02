import React, { createContext, ReactNode, useEffect, useState } from 'react'
import User from '@/interfaces/User'

import { getToken } from '@/services/auth'
import api from '@/services/api'

interface UserContextData {
    user: User | null
    setUser: (user: User | null) => void
}

interface UserProviderProps {
    children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export const UserProvider = ({children}: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        if (getToken() !== null && user === null) {
            api.get('profile')
                .then((response: any) => {
                    setUser(response.data)
                })
        }
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}