import List from '@mui/material/List'
import { ListItemButton, ListItemText } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment'
import { useNavigate } from 'react-router-dom'

const ChatsList = ({ chats, chatId }) => {
  const navigate = useNavigate()
  const selectChat = (id) => {
    if (!id) return
    navigate(`/chat/${id}`)
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {chats.map((chat, index) => (
        <ListItemButton
          key={chat.id}
          selected={chat.id === chatId}
          onClick={() => selectChat(chat.id)}
        >
          <ListItemText primary={chat.header} />
          <CommentIcon />
        </ListItemButton>
      ))}
    </List>
  )
}

export default ChatsList
