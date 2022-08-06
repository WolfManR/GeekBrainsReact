import { useState, useEffect, useCallback } from "react";
import MessagesList from "./components/messagesList/MessagesList";
import Tasks from "./components/tasks/Tasks";
import "./App.css";

const emptyMessage = { author: "", body: "" };
const botMessage = { author: "Bot", body: "" };

function App() {
  const [currentUser, setCurrentUser] = useState("John");
  const [messageList, setMessageList] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const [formMessage, setFormMessage] = useState({ ...emptyMessage });

  const getNewId = useCallback(() => {
    const newId = idCounter + 1;
    setIdCounter(newId);
    return newId;
  }, [idCounter]);

  const addMessage = useCallback(
    (newMessage) => {
      setMessageList([...messageList, { ...newMessage, id: getNewId() }]);
    },
    [getNewId, messageList]
  );

  useEffect(() => {
    if (messageList.length === 0) return;
    const lastMessage = messageList.at(-1);
    if (lastMessage.author === botMessage.author) return;
    setTimeout(() => addMessage({ ...botMessage, body: `${lastMessage.author} write in chat` }), 1500);
  }, [messageList, addMessage]);

  const addMessageFromForm = (e) => {
    e.preventDefault();
    addMessage(formMessage);
    setFormMessage({ ...emptyMessage });
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
          <input type="text" placeholder="user" value={formMessage.author} onChange={(e) => setFormMessage({ ...formMessage, author: e.target.value })} />
          <input type="text" placeholder="message" value={formMessage.body} onChange={(e) => setFormMessage({ ...formMessage, body: e.target.value })} />
          <button onClick={addMessageFromForm}>send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
