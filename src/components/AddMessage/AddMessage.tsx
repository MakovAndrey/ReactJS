import React, { FC, useState, useRef, memo, useContext } from "react";
import { Button } from "@mui/material";
import { AUTHOR, Message } from "../../types";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMessage } from "src/store/messages/actions";
import { Wrapper } from "./styled";
import { ThemeContext } from "src/utils/ThemeContext";


export const AddMessage: FC = memo(() => {
    const [message, setMessage] = useState("");
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleAddMessage = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (chatId) {
            dispatch(
                addMessage(chatId, {
                    author: AUTHOR.USER,
                    message,
                })
            );
            setMessage("");
        }
    };
    const inputFocus = useRef(null);

    return (
        <Wrapper>
            <form action="#" onSubmit={handleAddMessage}>
                <input
                    type="text"
                    value={message}
                    placeholder="Type message"
                    onChange={(ev) => setMessage(ev.target.value)}
                    role="input"
                    ref={inputFocus}
                />
                <Button
                    data-testid="addmessage"
                    disabled={!message}
                    role="button"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
            <p>theme: {theme === "light" ? "🌞" : "🌙"}</p>
            <button onClick={toggleTheme}>toggle theme</button>
        </Wrapper>
    );
});
