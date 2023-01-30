import axios, { type AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'

axios.defaults.baseURL = 'http://localhost:3000'

type UseAxiosProps = {
  url: string
  method: 'get' | 'post' | 'put' | 'delete'
  data?: any
}

type useAxiosResponse = {
  response: any
  loading: boolean
  error?: any
  sendData: () => void
}

const useAxios = (axiosParams: UseAxiosProps): useAxiosResponse => {
  const [response, setResponse] = useState<AxiosResponse>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const request = async (params: UseAxiosProps) => {
    setLoading(true)
    setError(undefined)
    try {
      const result = await axios.request(params)
      setResponse(result)
    } catch (error: useAxiosResponse['error']) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const sendData = (): void => {
    request(axiosParams).then(r => r)
  }

  useEffect(() => {
    if (axiosParams.method === 'get') {
      request(axiosParams).then(r => r)
    }
  }, [])

  return { response, error, loading, sendData }
}

export default useAxios
