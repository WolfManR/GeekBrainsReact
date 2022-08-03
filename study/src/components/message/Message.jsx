import React from 'react'
import './Message.css'

function Message({ message }) {
  return (
    <div className="Message">
      <span>{message}</span>
    </div>
  )
}

export default Message
