import { FC, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import style from "./ChatPage.module.css";
import { ChatList } from "src/components/ChatList";
import { AddMessage } from "src/components/AddMessage/index";
import { MessageList } from "src/components/MessageList/MessageList";
import { AUTHOR, Chat, Message, Messages } from "src/types";

interface ChatPageProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
    messages: Messages;
    onAddMessage: (chatId: string, msg: Message) => void;
    delChat: (chatId: string) => void;
}

export const ChatPage: FC<ChatPageProps> = ({
    chats,
    onAddChat,
    messages,
    onAddMessage,
    delChat,
}) => {
    const { chatId } = useParams();

    useEffect(() => {
        if (
            chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
        ) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: AUTHOR.BOT,
                    message: "some response",
                });
            }, 1500);

            return () => clearTimeout(timeout);
        }
    }, [chatId, messages, onAddMessage]);

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />;
    }

    return (
        <>
            <div className={style.App}>
                <main className={style.Wrapper}>
                    <ChatList
                        chats={chats}
                        onAddChat={onAddChat}
                        delChat={delChat}
                    />
                    <div className={style.WrapperMessage}>
                        <MessageList
                            messages={chatId ? messages[chatId] : []}
                        />
                        <AddMessage addMessage={onAddMessage} />
                    </div>
                </main>
            </div>
        </>
    );
};
