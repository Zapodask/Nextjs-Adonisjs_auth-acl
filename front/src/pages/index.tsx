import React from 'react'
import Link from 'next/Link'

import Header from '@/components/layout'

const Index: React.FC = () => {
  return (
    <Header title='Home'>
      <Link href='/login'>
        <h3>Login</h3>
      </Link>
    </Header>
  )
}

export default Index