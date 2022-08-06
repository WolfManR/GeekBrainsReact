import { useState } from "react";
import MessagesList from "./components/messagesList/MessagesList";
import Tasks from "./components/tasks/Tasks";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState("John");
  const [messageList, setMessageList] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const emptyMessage = { author: "", body: "" };
  const [formMessage, setMessage] = useState({ ...emptyMessage });

  const getNewId = () => {
    const newId = idCounter + 1;
    setIdCounter(newId);
    return newId;
  };

  const addMessage = (e) => {
    e.preventDefault();
    const newMessage = { ...formMessage, id: getNewId() };
    setMessageList([...messageList, newMessage]);
    setMessage({ ...emptyMessage });
  };

  return (
    <div className="App">
      <Tasks />

      <div className="chat">
        <div className="chat-user">
          <label>Current User: </label>
          <input type="text" value={currentUser} onChange={(e) => setCurrentUser(e.target.value)} />
        </div>

        <MessagesList messages={messageList} currentUser={currentUser} />

        <form className="form-message">
          <input type="text" placeholder="user" value={formMessage.author} onChange={(e) => setMessage({ ...formMessage, author: e.target.value })} />
          <input type="text" placeholder="message" value={formMessage.body} onChange={(e) => setMessage({ ...formMessage, body: e.target.value })} />
          <button onClick={addMessage}>send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
