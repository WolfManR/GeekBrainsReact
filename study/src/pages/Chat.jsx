import { useEffect, useCallback, useRef } from 'react'
import MessagesList from '../components/messagesList/MessagesList'
import MessageForm from '../components/messageForm/MessageForm'
import ChatsList from '../components/chatsList/ChatsList'
import CustomLink from '../components/customLink/CustomLink'

import { useSelector, useDispatch } from 'react-redux'
import { selectMessages, addMessage } from '../store/chatSlice'
import { selectUserName } from '../store/authSlice'

const Chat = () => {
  const userName = useSelector(selectUserName)
  const messages = useSelector(selectMessages)
  const dispatch = useDispatch()

  const formRef = useRef(null)

  const botSendMessage = useCallback(
    (messages) => {
      if (messages.length === 0) return
      const lastMessage = messages.at(-1)
      if (lastMessage.author === 'Bot') return
      let message = {
        author: 'Bot',
        body: `${lastMessage.author} write in chat`,
      }
      dispatch(addMessage(message))
      formRef.current.focus()
    },
    [dispatch],
  )

  useEffect(() => {
    setTimeout(() => botSendMessage(messages), 1500)
  }, [messages, botSendMessage])

  return (
    <div className="chat">
      <div className="side" style={{ width: '300px' }}>
        <div className="logo">
          <CustomLink to={'/'}>Home</CustomLink>
        </div>
        <div className="chat-user">
          <label label="Current User" value={userName} />
        </div>

        <ChatsList />
      </div>

      <div className="chat-group">
        <MessagesList />

        <MessageForm ref={formRef} />
      </div>
    </div>
  )
}

export default Chat
