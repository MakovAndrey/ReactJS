import { FC, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors'
import style from "./ChatPage.module.css";
import { ChatList } from "src/components/ChatList";
import { AddMessage } from "src/components/AddMessage/index";
import { MessageList } from "src/components/MessageList/MessageList";
import { AUTHOR, Message } from "src/types";
import { addMessage } from "src/store/messages/actions";

export const ChatPage: FC = () => {
    const { chatId } = useParams();
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
        ) {
            const timeout = setTimeout(() => {
                dispatch(
                    addMessage(chatId, {
                        author: AUTHOR.BOT,
                        message: "some response",
                    })
                );
            }, 1500);

            return () => clearTimeout(timeout);
        }
    }, [chatId, messages, dispatch]);

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
