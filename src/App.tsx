import { FC, useState } from "react";
import "./App.css";
import { ChatList } from "components/ChatList";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { AUTHOR, Chat, Message, Messages } from "./types";
import { ChatPage } from "./pages/ChatPage";
import { Header } from "./components/Header";

const defaultChats: Chat[] = [
  {
    id: "1",
    name: "Chat1",
  },
  {
    id: "2",
    name: "Chat2",
  },
  {
    id: "3",
    name: "Chat3",
  },
];

const defaultMessages: Messages = {
  "1": [{ author: AUTHOR.BOT, message: "Спасибо за ваш отзыв" }],
};

export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messages, setMessages] = useState<Messages>(defaultMessages);

  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessages({
      ...messages,
      [newChat.id]: [],
    });
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  const onDelChat = (chatId: string) => {
    const filterChats = chats.filter((item) => item.id != chatId);
    setChats([...filterChats]);
    delete messages[chatId];
    setMessages({ ...messages });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route
              index
              element={
                <ChatList
                  chats={chats}
                  onAddChat={onAddChat}
                  delChat={onDelChat}
                />
              }
            />
            <Route
              path=":chatId"
              element={
                <ChatPage
                  chats={chats}
                  onAddChat={onAddChat}
                  messages={messages}
                  onAddMessage={onAddMessage}
                  delChat={onDelChat}
                />
              }
            />
          </Route>
          <Route path="*" element={<div>EROR page</div>} />
        </Route>
      </Routes>
    </>
  );
};
