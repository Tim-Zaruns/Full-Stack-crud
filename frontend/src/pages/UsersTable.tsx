// import { useEffect, useState } from 'react'
import axios from 'axios'
import useAxios from '../hooks/useAxios'
import { useEffect, useState } from 'react'
import Navigate from '../components/Navigate'
import { useNavigate } from 'react-router-dom'

type UserType = {
  id: number
  name: string
  email: string
  password: string
  age: string
}

axios.defaults.baseURL = 'http://localhost:3000'

const UsersTable = (): JSX.Element => {
  const [deletedUserId, setDeletedUserId] = useState<number | string>('')
  const navigate = useNavigate()

  const { response: usersResponse, loading: usersLoading, sendData: getUserData } = useAxios({
    method: 'get',
    url: '/users'
  })

  const { response, sendData: removeUser } = useAxios({
    method: 'delete',
    url: `/users/${deletedUserId}`
  })

  useEffect(() => {
    if (deletedUserId) {
      removeUser()
    }
  }, [deletedUserId])

  useEffect(() => {
    getUserData()
  }, [response])

  const deleteUser = (id: number): void => {
    setDeletedUserId(id)
  }

  const navigateToEditPage = (id: number) => {
    navigate(`/user/${id}`)
  }

  return (
    <>
      {!usersLoading && (
        <div>
          <div className="mb-4">
            <Navigate url="/form" label="Create User" />
          </div>
          <div className="align-middle border-b border-gray-200 shadow rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="table__head">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>email</th>
                <th>age</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
              </thead>
              <tbody className="">
              { usersResponse?.data.data.users.map(({ id, name, email, age, password }: UserType) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{age}</td>
                  <td>
                    <div onClick={() => { navigateToEditPage(id) }} className="px-6 py-2 text-sm rounded shadow bg-cyan-100 hover:bg-cyan-200 text-cyan-500 text-center cursor-pointer">
                      edit
                    </div>
                  </td>
                  <td>
                    <div onClick={() => { deleteUser(id) }} className="px-6 py-2 text-sm rounded shadow bg-red-100 hover:bg-red-200 text-red-500 text-center cursor-pointer">
                      Delete
                    </div>
                  </td>
                </tr>
              ))
              }
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )
}

export default UsersTable
