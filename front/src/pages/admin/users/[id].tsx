import React from 'react'
import Layout from '@/components/layout'

import useFetch from '@/hooks/useFetch'

const ShowUser = () => {
    const { data, error } = useFetch('admin/users/')

    return (
        <Layout title='User'>

        </Layout>
    )
}

export default ShowUser