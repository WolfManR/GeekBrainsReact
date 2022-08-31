import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../store/authSlice'

const SignUp = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({ login: '', password: '' })
  const handleSignUp = (e) => {
    dispatch(register(form))
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
      <Button onClick={handleSignUp}>Sign Up</Button>
    </Stack>
  )
}

export default SignUp
