import { FC} from "react";
import { Navigate, useParams } from "react-router-dom";
import style from "./ChatPage.module.css";
import { ChatList } from "src/components/ChatList";
import { AddMessageForm } from "src/components/AddMessage/index";
import { MessageList } from "src/components/MessageList/MessageList";

export const ChatPage: FC<any> = ({ chats, messages }) => {
    const { chatId } = useParams();
    
    // const messages = useSelector(selectMessages);

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />;
    }

    const prepareMessages = [
        ...Object.values((chatId && messages[chatId].messages) || {}),
    ];

    return (
        <>
            <div className={style["App"]}>
                <main className={style["Wrapper"]}>
                    <ChatList chats={chats} />
                    <div className={style["WrapperMessage"]}>
                        <MessageList messages={prepareMessages} />
                        <AddMessageForm />
                    </div>
                </main>
            </div>
        </>
    );
};
