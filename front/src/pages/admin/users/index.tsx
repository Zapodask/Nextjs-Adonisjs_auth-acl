import React from 'react'
import Header from '@/components/layout'

import protectRoute from '@/services/protectRoute'
import useFetch from '@/hooks/useFetch'

import User from '@/interfaces/User'
import MaterialTable from 'material-table'

import Router from 'next/Router'
import { getRole } from '@/services/auth'

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
    protectRoute('manager')

    const { data, error } = useFetch<Data>('/admin/users')

    if (!data) return <h1>Carregando...</h1>
    
    if (error) return <h1>Erro ao carregar</h1>

    return (
        <Header title='Admin users'>
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
                    hidden: (getRole() === 'admin' ? false : true),
                    onClick: () => {
                      Router.push('/admin/users/add')
                    }
                  }
                ]}
          />
        </Header>
    )
}

export default Users