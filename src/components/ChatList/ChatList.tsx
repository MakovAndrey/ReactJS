import {  FC } from "react";
import { Chats } from "src/types";
import { ListItem, List } from "@mui/material";

interface ChatListProps {
    chatList: Chats;
}

export const ChatList: FC<ChatListProps> = ({ chatList }) => (
    <List>
        {chatList.map((item) => {
            return (
                <ListItem key={item.id}>
                    Чат номер:{item.id} 
                    Название чата: {item.name}
                    <hr />
                </ListItem>
            )
        })}
    </List>

);
