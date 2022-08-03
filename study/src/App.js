import Message from "./components/message/Message";

function App() {
  const displayMessage = "Hello React App";

  return (
    <div>
      <Message message={displayMessage} />
    </div>
  );
}

export default App;
