import { useState, forwardRef } from 'react'

const MessageForm = forwardRef(({ onMessageSend }, ref) =>  {
  const [formMessage, setFormMessage] = useState({ author: '', body: '' })

  const sendMessage = (e) => {
    e.preventDefault()
    onMessageSend(formMessage)
    setFormMessage({ ...formMessage, body: '' })
  }

  return (
    <div>
      <form className="form-message" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="user"
          name="author"
          ref={ref}
          value={formMessage.author}
          onChange={(e) =>
            setFormMessage({ ...formMessage, author: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="message"
          name="text"
          ref={ref}
          value={formMessage.body}
          onChange={(e) =>
            setFormMessage({ ...formMessage, body: e.target.value })
          }
        />
        <button>send</button>
      </form>
    </div>
  )
})

export default MessageForm
