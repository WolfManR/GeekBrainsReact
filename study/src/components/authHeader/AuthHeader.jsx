import { Button } from '@mui/material'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectUserName, signOut } from '../../store/authSlice'
import CustomLink from '../customLink/CustomLink'

const AuthHeader = () => {
  const user = useSelector(selectUserName)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(signOut())
  }

  if (user) {
    return (
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    )
  }

  return (
    <div>
      <CustomLink to={'/login'}>Login</CustomLink>
      <CustomLink className="Button"to={'/register'}>Register</CustomLink>
    </div>
  )
}

export default AuthHeader
