import React, { useContext, useState } from 'react'
import { Nav } from '@/styles/components/layout/navbar'

import Link from 'next/Link'
import Login from '@/components/layout/login'

import { UserContext } from '@/contexts/UserContext'
import { handleLogout } from '@/utils/authHandles'

import { Switch } from '@material-ui/core'
import { ThemeContext } from '@/contexts/ThemeContext'

const NavBar = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [openLogin, setOpenLogin] = useState<boolean>(false)

    const { user } = useContext(UserContext)
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <Nav checked={checked} >
                <input id='nav-toggle' type='checkbox' onChange={() => setChecked(!checked)} />
                <div className='logo'>
                    <Link href='/' >
                        <a>
                            Home
                        </a>
                    </Link>
                </div>
                <ul className='links'>
                    <Switch checked={theme.title === 'dark' ? true : false} color='primary' onChange={() => toggleTheme()} />
                    {!user ? (
                        <>
                            <li>
                                <Link href='#'>
                                    <button onClick={() => setOpenLogin(true)}>Login</button>
                                </Link>
                            </li>
                            <li>
                                <Link href='/register'>
                                    <button>Register</button>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <strong>Olá {user.name}</strong>
                            {user.role === 'admin' || user.role === 'manager' ? (
                                <li>
                                    <Link href='/admin/users'>
                                        <button>Admin</button>
                                    </Link>
                                </li>
                            ) : null}
                            <li>
                                <Link href='/profile'>
                                    <button>Profile</button>
                                </Link>
                            </li>
                            <button onClick={handleLogout} >
                                Logout
                            </button>
                        </>
                    )}
                </ul>
                <label htmlFor='nav-toggle' className='icon-burger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </label>
            </Nav>
            <Login open={openLogin} setOpen={setOpenLogin} />
        </>
    )
}

export default NavBar
