import { FC, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors'
import style from "./ChatPage.module.css";
import { ChatList } from "src/components/ChatList";
import { AddMessage } from "src/components/AddMessage/index";
import { MessageList } from "src/components/MessageList/MessageList";

export const ChatPage: FC = () => {
    const { chatId } = useParams();
    const messages = useSelector(selectMessages);

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />;
    }

    return (
        <>
            <div className={style.App}>
                <main className={style.Wrapper}>
                    <ChatList />
                    <div className={style.WrapperMessage}>
                        <MessageList messages={chatId ? messages[chatId] : []} />
                        <AddMessage  />
                    </div>
                </main>
            </div>
        </>
    );
};
