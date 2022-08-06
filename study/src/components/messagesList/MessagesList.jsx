import React from 'react'
import Message from '../message/Message.jsx'
import './MessagesList.css'

function MessagesList({ messages, currentUser }) {
  return (
    <div className="MessagesList">
      {messages.map((item) => {
        return (
          <Message
            key={item.id}
            author={item.author}
            message={item.message}
            style={{
              textAlign: item.author === currentUser ? 'left' : 'right',
            }}
          />
        )
      })}
    </div>
  )
}

export default MessagesList
