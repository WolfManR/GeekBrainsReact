import { useState, useEffect, useCallback, useRef } from 'react'
import MessagesList from '../components/messagesList/MessagesList'
import MessageForm from '../components/messageForm/MessageForm'
import ChatsList from '../components/chatsList/ChatsList'
import { TextField } from '@mui/material'
import CustomLink from '../components/customLink/CustomLink'

import { getNewId } from '../store/chatSlice'

const botMessage = { author: 'Bot', body: '' }

const Chat = () => {
  const [currentUser, setCurrentUser] = useState('John')
  const [messageList, setMessageList] = useState([])

  const formRef = useRef(null)

  const addMessage = useCallback(
    (newMessage) => {
      setMessageList([...messageList, { ...newMessage, id: getNewId }])
    },
    [getNewId, messageList],
  )

  const botSendMessage = useCallback(
    (messages) => {
      if (messages.length === 0) return
      const lastMessage = messages.at(-1)
      if (lastMessage.author === botMessage.author) return
      addMessage({ ...botMessage, body: `${lastMessage.author} write in chat` })
      formRef.current.focus()
    },
    [addMessage],
  )

  useEffect(() => {
    setTimeout(() => botSendMessage(messageList), 1500)
  }, [messageList, botSendMessage])

  return (
    <div className="chat">
      <div className="side" style={{ width: '300px' }}>
        <div className="logo">
          <CustomLink to={'/'}>Home</CustomLink>
        </div>
        <div className="chat-user">
          <TextField
            type="text"
            label="Current User"
            value={currentUser}
            onChange={(e) => setCurrentUser(e.target.value)}
          />
        </div>

        <ChatsList />
      </div>

      <div className="chat-group">
        <MessagesList messages={messageList} currentUser={currentUser} />

        <MessageForm onMessageSend={addMessage} ref={formRef} />
      </div>
    </div>
  )
}

export default Chat
