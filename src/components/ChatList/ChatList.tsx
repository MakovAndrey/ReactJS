import { FC, useState, useEffect } from "react";
import { List } from "@mui/material";
import { NavLink } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "src/store/messages/actions";
import { selectChats } from "src/store/messages/selectors";
import style from "../ChatList/ChatList.module.css";

export const ChatList: FC = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const chats = useSelector(
        selectChats,
        (prev, next) => prev.length === next.length
    );

    const handlerSubmit = (ev: React.ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();

        if (value) {
            dispatch(addChat(value));
            setValue("");
        }
    };

    return (
        <div>
            <List className={style.ChatListUl}>
                {chats.map((chat) => (
                    <NavLink
                        to={`/chats/${chat.name}`}
                        key={chat.id}
                        data-testid="li"
                        className={({ isActive }) =>
                            isActive ? style.activeChatLink : style.ChatNavLink
                        }
                    >
                        {chat.name}{" "}
                        <button onClick={() => dispatch(deleteChat(chat.name))}>
                            del
                        </button>
                    </NavLink>
                ))}
            </List>
            <form action="#" onSubmit={handlerSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={(ev) => setValue(ev.target.value)}
                />
                <button>create new chat</button>
            </form>
        </div>
    );
};
