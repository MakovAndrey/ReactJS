import { FC, useState } from "react";
import "./App.css";
import { ChatList } from "components/ChatList";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { Header } from "./components/Header";
import { ThemeContext } from "./utils/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store";

export const App: FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Provider store={store}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Main />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="chats">
                            <Route index element={<ChatList/>}/>
                            <Route path=":chatId" element={<ChatPage/>}
                            />
                        </Route>
                    </Route>
                    <Route path="*" element={<div>404 page</div>} />
                </Routes>
            </ThemeContext.Provider>
        </Provider>
    );
};
