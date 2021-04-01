import React from 'react'
import Layout from '@/components/layout'

import { Form } from '@unform/web'
import { Input } from '@/components/input'

const Index: React.FC = () => {
  return (
    <Layout title='Home'>
      <Form onSubmit={() => console.log('a')}>
        <Input name='name' label='Name' />
      </Form>
    </Layout>
  )
}

export default Index