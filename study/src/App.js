import { useState, useEffect, useCallback, useRef } from "react";
import MessagesList from "./components/messagesList/MessagesList";
import Tasks from "./components/tasks/Tasks";
import "./App.css";
import MessageForm from "./components/messageForm/MessageForm";

const botMessage = { author: "Bot", body: "" };

function App() {
  const [currentUser, setCurrentUser] = useState("John");
  const [messageList, setMessageList] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const formRef = useRef(null);

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

  const botSendMessage = useCallback(
    (messages) => {
      if (messages.length === 0) return;
      const lastMessage = messages.at(-1);
      if (lastMessage.author === botMessage.author) return;
      addMessage({ ...botMessage, body: `${lastMessage.author} write in chat` });
      formRef.current.focus();
    },
    [addMessage]
  );

  useEffect(() => {
    setTimeout(() => botSendMessage(messageList), 1500);
  }, [messageList, botSendMessage]);

  return (
    <div className="App">
      <Tasks />

      <div className="chat">
        <div className="chat-user">
          <label>Current User: </label>
          <input type="text" value={currentUser} onChange={(e) => setCurrentUser(e.target.value)} />
        </div>

        <MessagesList messages={messageList} currentUser={currentUser} />

        <MessageForm onMessageSend={addMessage} ref={formRef} />
      </div>
    </div>
  );
}

export default App;
