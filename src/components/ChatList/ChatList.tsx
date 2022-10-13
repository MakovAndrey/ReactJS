import { FC, useState } from "react";
import { List } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from "../ChatList/ChatList.module.css";
import { set, ref, remove } from "firebase/database";
import { db } from "src/services/firebase";
import { nanoid } from "nanoid";

export const ChatList: FC<any> = ({ chats }) => {
    const [value, setValue] = useState("");
    // const dispatch = useDispatch();
    // const chats = useSelector(
    //     selectChats,
    //     (prev, next) => prev.length === next.length
    // );

    const handlerSubmit = (ev: React.ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (value) {
            set(ref(db, `chats/${value}`), {
                id: nanoid(),
                name: value,
            });

            set(ref(db, `messages/${value}`), {
                name: value,
            });
        }
    };

    const handlerDelete = (chatName: string) => {
        remove(ref(db, `chats/${chatName}`));
    };

    return (
        <div>
            <List className={style["ChatListUl"]}>
                {chats.map((chat: any) => (
                    <NavLink
                        to={`/chats/${chat.name}`}
                        key={chat.id}
                        data-testid="li"
                        className={({ isActive }) =>
                            isActive ? style["activeChatLink"] : style["ChatNavLink"]
                        }
                    >
                        {chat.name}{" "}
                        <button onClick={() => handlerDelete(chat.name)}>
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
