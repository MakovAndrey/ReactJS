import { FC } from "react";
import { Chat } from "src/types";
import { List } from "@mui/material";
import { useState } from "react";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import style from "../ChatList/ChatList.module.css";

interface ChatListProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
    delChat: (chatId: string) => void;
}

export const ChatList: FC<ChatListProps> = ({ chats, onAddChat, delChat }) => {
    const [value, setValue] = useState("");

    const handlerSubmit = (ev: React.ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();

        if (value) {
            onAddChat({
                id: nanoid(),
                name: value,
            });
            setValue("");
        }
    };

    return (
        <div>
            <List className={style.ChatListUl}>
                {chats.map((chat) => (
                    <NavLink
                        to={`/chats/${chat.id}`}
                        key={chat.id}
                        data-testid="li"
                        className={({ isActive }) =>
                            isActive ? style.activeChatLink : style.ChatNavLink
                        }>
                        {chat.name}{" "}
                        <button onClick={() => delChat(chat.id)}>del</button>
                    </NavLink>
                ))}
            </List>
            <form action="#" onSubmit={handlerSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={(ev) => setValue(ev.target.value)}/>
                <button>create new chat</button>
            </form>
        </div>
    );
};
