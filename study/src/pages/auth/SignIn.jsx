import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../store/authSlice'

const SignIn = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({ login: '', password: '' })
  const handleSignIn = (e) => {
    dispatch(signIn(form))
  }

  return (
    <Stack>
      <TextField
        type="text"
        label="Login"
        value={form.login}
        onChange={(e) => setForm({ ...form, login: e.target.value })}
      />
      <TextField
        type="text"
        label="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button onClick={handleSignIn}>Sign In</Button>
    </Stack>
  )
}

export default SignIn
