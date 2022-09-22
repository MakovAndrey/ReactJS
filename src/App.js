"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const MessageForm_1 = require("./components/MessageForm");
const MessageList_1 = require("./components/MessageList");
const material_1 = require("@mui/material");
const autoAnswer = "Спасибо за ваш отзыв!";
function App() {
    const [name] = (0, react_1.useState)("");
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [chats] = (0, react_1.useState)([
        { name: "chat1", id: 1 },
        { name: "chat2", id: 2 },
        { name: "chat3", id: 3 },
    ]);
    const addMessage = (message, name) => {
        setMessages((messagesPrev) => [
            ...messagesPrev,
            { author: name, text: message },
        ]);
    };
    (0, react_1.useEffect)(() => {
        const messagePrev = messages[messages.length - 1];
        let timeout;
        if (messages.length > 0 && messagePrev.author !== "Администратор") {
            console.log(messages.length);
            console.log(messages[messages.length - 1].author);
            timeout = setTimeout(() => {
                addMessage(autoAnswer, "Администратор");
            }, 1500);
        }
        return () => clearTimeout(timeout);
    }, [messages, name]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(MessageForm_1.MessageForm, { messageSetter: addMessage, author: name }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)(MessageList_1.MessageList, { messageList: messages }), (0, jsx_runtime_1.jsx)(material_1.Container, Object.assign({ maxWidth: "md" }, { children: (0, jsx_runtime_1.jsx)(material_1.List, { children: chats.map((item) => {
                        return ((0, jsx_runtime_1.jsxs)(material_1.ListItem, { children: [item.id + ":", " ", item.name] }, item.id));
                    }) }) }))] }));
}
exports.App = App;
