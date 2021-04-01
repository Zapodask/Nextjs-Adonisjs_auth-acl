import React, { createContext, ReactNode, useEffect, useState } from 'react'
import User from '@/interfaces/User'

import Cookie from 'js-cookie'
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
        async () => {
            const token = await Cookie.getJSON('credentials').token

            if (token !== null && user === null) {
                api.get('profile')
                    .then((response: any) => {
                        setUser(response.data)
                    })
            } else if (token === null) {
                setUser(null)
            }
        }
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}