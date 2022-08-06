import { useState } from "react";
import MessagesList from "./components/messagesList/MessagesList";
import Tasks from "./components/tasks/Tasks";

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
    <div>
      <Tasks />

      <MessagesList messages={messageList} currentUser={currentUser}/>
    </div>
  );
}

export default App;
