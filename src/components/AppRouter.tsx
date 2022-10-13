import { FC, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutWithConnect } from "src/pages/About";
import { ChatPage } from "src/pages/ChatPage";
import { Main } from "src/pages/Main";
import { ChatList } from "./ChatList";
import { Header } from "./Header";
import { SignIn } from "../pages/Signin";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Articles } from "src/pages/Articles";
import { SignUp } from "src/pages/SignUp";
import { db, firebaseAuth, getChats } from "src/services/firebase";
import { useDispatch } from "react-redux";
import { auth } from "src/store/profile/slice";
import { onValue, ref } from "firebase/database";

const Profile = lazy(() =>
    Promise.all([
        import("../pages/Profile").then(({ Profile }) => ({
            default: Profile,
        })),
        new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([moduleExport]) => moduleExport)
);

export const AppRouter: FC = () => {
    const dispatch = useDispatch();

    const [chats, setChats] = useState<any[]>([]);
    const [messages, setMessages] = useState<any>({});

    useEffect(() => {
        const authUnsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            dispatch(auth(!!user));
        });

        const chatsUnsubscribe = onValue(getChats(), (snapshot) => {
            const data = snapshot.val() || {};
            setChats([...Object.values(data)]);
        });

        const messagesUnsubscribe = onValue(
            ref(db, "messages/"),
            (snapshot) => {
                const data = snapshot.val() || {};
                setMessages(data);
            }
        );

        return () => {
            authUnsubscribe();
            chatsUnsubscribe();
            messagesUnsubscribe();
        };
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Main />} />
                <Route
                    path="profile"
                    element={<PrivateRoute component={<Profile />} />}
                />
                <Route path="about" element={<AboutWithConnect />} />
                <Route
                    path="signin"
                    element={<PublicRoute component={<SignIn />} />}
                />
                <Route
                    path="signup"
                    element={<PublicRoute component={<SignUp />} />}
                />
                <Route path="chats" element={<PrivateRoute />}>
                    <Route
                        index
                        element={<ChatList chats={chats} messages={messages} />}
                    />
                    <Route
                        path=":chatId"
                        element={<ChatPage chats={chats} messages={messages} />}
                    />
                </Route>
                <Route path="articles" element={<Articles />} />
            </Route>
            <Route path="*" element={<div>404 page</div>} />
        </Routes>
    );
};
