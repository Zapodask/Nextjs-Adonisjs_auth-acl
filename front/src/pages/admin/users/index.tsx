import React from 'react'
import Layout from '@/components/layout'

import withAuth from '@/utils/withAuth'
import useFetch from '@/hooks/useFetch'

import User from '@/interfaces/User'
import MaterialTable from 'material-table'

import Router from 'next/Router'
import Cookie from 'js-cookie'

interface Data {
  pagination: {
    total: number
    perPage: number
    page: number
    lastPage: number
  }
  data: User[]
}

const Users: React.FC = () => {
    const { data, error } = useFetch<Data>('/admin/users')

    if (!data) return <h1>Carregando...</h1>
    
    if (error) return <h1>Erro ao carregar</h1>

    return (
        <Layout title='Admin users'>
          <MaterialTable
              title='Usuários'
              columns={[
                  { title: 'Id', field: 'id', type: 'numeric' },
                  { title: 'Nome', field: 'name', type: 'string' },
                  { title: 'Sobrenome', field: 'surname', type: 'string' },
                  { title: 'Email', field: 'email', type: 'string'},
                  { title: 'Role', field: 'role', type: 'string' }
              ]}
              data={data.data}
              options={{
                  paging: true,
                  pageSize: 10,
                  pageSizeOptions: [10, 50, 100, 150]
                }}
                actions={[
                  {
                    icon: 'add',
                    tooltip: 'Add User',
                    isFreeAction: true,
                    hidden: (Cookie.getJSON('credentials').role === 'admin' ? false : true),
                    onClick: () => {
                      Router.push('/admin/users/add')
                    }
                  }
                ]}
          />
        </Layout>
    )
}

export default withAuth({Component: Users, role: 'manager'})