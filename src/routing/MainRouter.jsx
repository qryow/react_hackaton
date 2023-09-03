import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/AccountPages/RegisterPage'
import SearchPage from '../pages/SearchPage'
import LibraryPage from '../pages/LibraryPage'
import CreatePage from '../pages/CreatePage'
import LikedPage from '../pages/LikedPage'
import LoginPage from '../pages/AccountPages/LoginPage'

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
    },
    {
      id: 3,
      path: '/login',
      element: <LoginPage />
    },
    {
      id: 4,
      path: '/search',
      element: <SearchPage />
    },
    {
      id: 5,
      path: '/library',
      element: <LibraryPage />
    },
    {
      id: 6,
      path: '/create',
      element: <CreatePage />
    },
    {
      id: 7,
      path: '/liked',
      element: <LikedPage />
    },
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