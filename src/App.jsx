import { useEffect, useState } from 'react';
import { MessageForm } from './components/MessageForm/MessageForm.jsx';
import { MessageList } from './components/MessageList/MessageList';

const autoAnswer = 'Спасибо за ваш отзыв!';

export function App() {
  const [name] = useState('');
  const [messages, setMessages] = useState([]);

  const addMessage = (message, name) => {
    setMessages((messagesPrev) => [
      ...messagesPrev,
      { author: name, text: message },
    ]);
  };

  useEffect(() => {
    const messagePrev = messages[messages.length - 1];
    let timeout;
    if (messages.length > 0 && messagePrev.author !== 'Администратор') {
      console.log(messages.length);
      console.log(messages[messages.length - 1].author);
      timeout = setTimeout(() => {
        addMessage(autoAnswer, 'Администратор');
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [messages, name]);

  return (
    <>
      <MessageForm messageSetter={addMessage} author={name} />
      <br />
      <hr />
      <MessageList messageList={messages} />
    </>
  );
}
