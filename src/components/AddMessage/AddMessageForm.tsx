import React, { FC, useState, useRef, memo, useContext } from "react";
import { Button } from "@mui/material";
import { AUTHOR } from "../../types";
import { useParams } from "react-router-dom";
import { Wrapper } from "./styled";
import { ThemeContext } from "src/utils/ThemeContext";
import { push, ref } from "firebase/database";
import { db } from "src/services/firebase";



export const AddMessageForm: FC = memo(() => {
    const [message, setMessage] = useState("");
    const { chatId } = useParams();
    // const dispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleAddMessage = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (chatId) {
            // dispatch(
            //     addMessageWithReply({
            //         chatName: chatId,
            //         message: { author: AUTHOR.USER, message },
            //     })
            // );

            push(ref(db, `messages/${chatId}/messages`), {
                author: AUTHOR.USER,
                message,
            });

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
