import { useState } from "react";
import MessagesList from "./components/messagesList/MessagesList";
import Tasks from "./components/tasks/Tasks";
import "./App.css";

function App() {
  const [currentUser] = useState("John");
  const [messageList] = useState([
    {
      id: 1,
      author: "John",
      message: "Hello there",
    },
    {
      id: 2,
      author: "Lena",
      message: "Hi",
    },
  ]);
  return (
    <div className="App">
      <Tasks />

      <div className="chat">
        <MessagesList messages={messageList} currentUser={currentUser} />

        <form>
          <input type="text" placeholder="user" />
          <input type="text" placeholder="message" />
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
