import { useState } from "react";
import Message from "./components/message/Message";
import Tasks from "./components/tasks/Tasks";

function App() {
  const displayMessage = "Hello React App";
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
      <Message message={displayMessage} />
      {messageList.map((item) => (
        <Message key={item.id} message={item.message} />
      ))}
    </div>
  );
}

export default App;
