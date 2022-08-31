import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { selectUserName } from '../store/authSlice'

const AuthLayout = () => {
  const user = useSelector(selectUserName)
  const navigate = useNavigate()
  useEffect(() => {
      navigate('/')
  }, [user])

  return (
    <main>
      <Outlet />
    </main>
  )
}

export default AuthLayout
