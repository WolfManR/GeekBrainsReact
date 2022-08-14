import { useState, useEffect, useCallback, useRef } from 'react'
import MessagesList from '../components/messagesList/MessagesList'
import MessageForm from '../components/messageForm/MessageForm'
import ChatsList from '../components/chatsList/ChatsList'
import { TextField } from '@mui/material'
import CustomLink from '../components/customLink/CustomLink'
import { useParams } from 'react-router-dom'

const botMessage = { author: 'Bot', body: '' }

const Chat = () => {
  const { chatId } = useParams()
  const [chatsList, setChatsList] = useState([
    {
      id: 1,
      header: 'some header',
      messages: [],
    },
    {
      id: 2,
      header: 'some header2',
      messages: [],
    },
    {
      id: 3,
      header: 'some header3',
      messages: [],
    },
  ])
  const [currentUser, setCurrentUser] = useState('John')
  const getCurrentChat = () => {
    let id = parseInt(chatId)
    if (id === NaN) {
      return []
    }
    let chat = chatsList.find((item) => item.id === id)
    return chat.messages
  }
  const [messageList, setMessageList] = useState(getCurrentChat())

  const [idCounter, setIdCounter] = useState(0)

  const formRef = useRef(null)

  const getNewId = useCallback(() => {
    const newId = idCounter + 1
    setIdCounter(newId)
    return newId
  }, [idCounter])

  const addMessage = useCallback(
    (newMessage) => {
      setMessageList([...messageList, { ...newMessage, id: getNewId() }])
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
      <div className="side">
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

        <ChatsList chats={chatsList} chatId={chatId} />
      </div>

      <div className="chat-group">
        <MessagesList messages={messageList} currentUser={currentUser} />

        <MessageForm onMessageSend={addMessage} ref={formRef} />
      </div>
    </div>
  )
}

export default Chat
