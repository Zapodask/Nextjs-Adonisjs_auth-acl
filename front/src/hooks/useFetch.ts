import useSWR from 'swr'
import api from '@/services/api'

const useFetch = <Data = any, Error = any>(url: string, revalidateOnFocus: boolean = false) => {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url)

    return response.data;
  }, {revalidateOnFocus })

  return { data, error }
}

export default useFetch