import { useState, useEffect, FC } from "react";
import { MessageForm } from "./components/MessageForm/MessageForm";
import { MessageList } from "./components/MessageList/MessageList";
import { Container, ListItem, List } from "@material-ui/core";
import { Messages, Chats } from "./types";

const autoAnswer = "Спасибо за ваш отзыв!";

export function App() {
    const [name] = useState<string>("");
    const [messages, setMessages] = useState<Messages>([]);
    const [chats] = useState<Chats>([
        { name: "chat1", id: 1 },
        { name: "chat2", id: 2 },
        { name: "chat3", id: 3 },
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
        if (messages.length > 0 && messagePrev.author !== "Администратор") {
            console.log(messages.length);
            console.log(messages[messages.length - 1].author);
            timeout = setTimeout(() => {
                addMessage(autoAnswer, "Администратор");
            }, 1500);
        }
        return () => clearTimeout(timeout);
    }, [messages, name]);

    return (
        <div>
            <MessageForm messageSetter={addMessage} author={name} />
            <br />
            <hr />
            <MessageList messageList={messages} />

            <Container maxWidth="md">
                        <List>
                            {chats.map((item) => {
                                return (
                                    <ListItem key={item.id}>
                                        {item.id + ":"} {item.name}
                                    </ListItem>
                                );
                            })}
                        </List>
            </Container>
        </div>
    );
}
