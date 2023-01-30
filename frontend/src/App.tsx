import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import UsersTable from './pages/UsersTable'
import AddUser from './pages/AddUser'
import UpdateUser from './pages/UpdateUser'
import ErrorPage from './pages/ErrorPage'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="">
        <Routes>
          <Route path="/" element={<UsersTable />} />
          <Route path="/form" element={<AddUser />} />
          <Route path="/user/:id" element={<UpdateUser />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
