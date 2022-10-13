import style from "../MessageList/MessageList.module.css";
import { FC } from "react";
import { Message } from "src/types";

interface MessageListProps {
    messages: Message[];
}

export const MessageList: FC<any> = ({ messages }) => (
    <div className={style.messagelist}>
        <ul className={style.messagelistUl}>
            {messages.map((message: any, idx: number) => (
                <li className={style.messagelistLi} key={idx} data-testid="li">
                    {message.author}: {message.message}
                </li>
            ))}
        </ul>
    </div>
);
