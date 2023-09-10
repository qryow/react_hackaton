import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RegistrationPage from '../pages/AccountPages/RegistrationPage'
import RegisterPage from '../pages/AccountPages/RegisterPage'
import LoginPage from '../pages/AccountPages/LoginPage'
import SearchPage from '../pages/SearchPage'
import LibraryPage from '../pages/LibraryPage'
import CreatePage from '../pages/CreatePage'
import LikedPage from '../pages/LikedPage'
import CreateMusicPage from '../pages/CreateMusicPage'
import PremiumAccPage from '../pages/PremiumAccPage'
import EditProfilePage from '../pages/ProfilePages/EditProfilePage'

const MainRouter = () => {
  const ROUTES = [
    {
      id: 1,
      path: '/',
      element: <RegistrationPage />
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
      path: '/homepage',
      element: <HomePage />
    },
    {
      id: 5,
      path: '/search',
      element: <SearchPage />
    },
    {
      id: 6,
      path: '/library',
      element: <LibraryPage />
    },
    {
      id: 7,
      path: '/create',
      element: <CreatePage />
    },
    {
      id: 8,
      path: '/liked',
      element: <LikedPage />
    },
    {
      id: 9,
      path: '/create-music',
      element: <CreateMusicPage />
    },
    {
      id: 10,
      path: '/profile-edit/:id',
      element: <EditProfilePage />
    },
    {
      id: 11,
      path: '/premium',
      element: <PremiumAccPage />
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