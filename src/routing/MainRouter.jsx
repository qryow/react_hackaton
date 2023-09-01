import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import RegisterPage from '../pages/AccountPages/RegisterPage'

const MainRouter = () => {
  const ROUTES = [
    {
      id: 1,
      path: '/',
      element: <HomePage />
    },
    {
      id: 2,
      path: '/register',
      element: <RegisterPage />
    }
  ]

  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default MainRouter