import { useState, useEffect, FC } from "react";
import { MessageForm } from './components/MessageForm/MessageForm';
import { MessageList } from './components/MessageList/MessageList';
import { Container } from "@material-ui/core";
import { Messages, Chats } from './types';
import { ChatList } from "./components/ChatList/ChatList";

const autoAnswer = 'Спасибо за ваш отзыв!';

export const App: FC = () => {
  const [name] = useState<string>('');
  const [messages, setMessages] = useState<Messages>([]);
  const [chats] = useState<Chats>([
      { name: "chat1", id: 0 },
      { name: "chat2", id: 1 },
      { name: "chat3", id: 2 },
  ]);

  const addMessage = (message: string, name: string) => {
    setMessages((messagesPrev) => [
      ...messagesPrev,
      { author: name, text: message },
    ]);
  };

  useEffect(() => {
    const messagePrev = messages[messages.length - 1];
    let timeout: NodeJS.Timeout;
    if (messages.length > 0 && messagePrev.author !== 'Администратор') {
      timeout = setTimeout(() => {
        addMessage(autoAnswer, 'Администратор');
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [messages, name]);

  return (
      <Container>
          <ChatList chatList={chats} />
          <br />
          <hr />
          <MessageForm messageSetter={addMessage} author={name} />
          <br />
          <hr />
          <MessageList messageList={messages} />
          <br />
          <hr />
      </Container>
  );
}
