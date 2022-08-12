import { useState, forwardRef } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const MessageForm = forwardRef(({ onMessageSend }, ref) => {
  const [formMessage, setFormMessage] = useState({ author: '', body: '' })

  const sendMessage = (e) => {
    e.preventDefault()
    onMessageSend(formMessage)
    setFormMessage({ ...formMessage, body: '' })
  }

  return (
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
        onSubmit={sendMessage}
      >
        <TextField
          id="user"
          label="author"
          name="author"
          inputRef={ref}
          value={formMessage.author}
          onChange={(e) =>
            setFormMessage({ ...formMessage, author: e.target.value })
          }
        />
        <TextField
          id="message"
          label="message"
          name="text"
          inputRef={ref}
          value={formMessage.body}
          onChange={(e) =>
            setFormMessage({ ...formMessage, body: e.target.value })
          }
        />
        <Button type="submit">send</Button>
      </Box>
    </div>
  )
})

export default MessageForm
