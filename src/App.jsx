import { useEffect, useState } from "react";
import { MessageForm } from "./components/MessageForm/MessageForm.jsx";
import { MessageList } from "./components/MessageList/MessageList"

export const App = () => {
    const author = useState([author]);
    const [messages, setMessages] = useState([]);
    const autoAnswer = "Спасибо за ваш отзыв!";

    const addMessage = (message, author) => {
        setMessages((messagesPrev) => [
            ...messagesPrev, {author: author, text: message}
        ])
    };

    useEffect (() => {
        let timeout
        if (messages.length > 0 && messages[messages.length-1].author === author) {
            timeout = setTimeout(() => {
                addMessage( autoAnswer, 'Администратор')
            },1000);
        }
        return () => clearTimeout(timeout)
    },[messages]);

    return (
        <>
            <MessageForm messageSetter={MessageForm} author={author} />
            <br />
            <hr />
            <MessageList messageList={messages} />
        </>
    );
};
