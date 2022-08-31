import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { selectUserName } from '../store/authSlice'

const AuthLayout = () => {
  const user = useSelector(selectUserName)
  const navigate = useNavigate()
  useEffect(() => {
    // TODO: there may be situation handling with route callback variable, to navigate to page from which login or register was navigated
    navigate('/')
  }, [user, navigate])

  return (
    <main>
      <Outlet />
    </main>
  )
}

export default AuthLayout
