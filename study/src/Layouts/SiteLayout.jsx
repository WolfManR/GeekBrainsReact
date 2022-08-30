import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from '../components/customLink/CustomLink'

const SiteLayout = () => {
  return (
    <>
      <header>
        <div>
          <CustomLink to={'/'}>Home</CustomLink>
          <CustomLink to={'/chat'}>Chat</CustomLink>
          <CustomLink to={'/profile'}>Profile</CustomLink>
          <CustomLink to={'/counter'}>Counter</CustomLink>
          <CustomLink to={'/galery'}>Galery</CustomLink>
        </div>
        <div>
          <CustomLink to={'/login'}>Login</CustomLink>
          <CustomLink to={'/register'}>Register</CustomLink>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default SiteLayout
