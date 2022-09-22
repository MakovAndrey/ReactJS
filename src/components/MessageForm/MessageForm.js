"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageForm = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@material-ui/core");
const react_1 = require("react");
const MessageForm = ({ messageSetter }) => {
    const [error, setError] = (0, react_1.useState)(false);
    const [messageVar, setMessageVar] = (0, react_1.useState)("");
    const [author, setAuthor] = (0, react_1.useState)("");
    const errorName = "Заполните все необходимые поля!";
    const errorTogle = (state) => { setError(state); };
    const handleChange = (e) => {
        setMessageVar(e.currentTarget.value);
        setError(false);
    };
    const addMessageHandler = (e) => {
        e.preventDefault();
        if (messageVar && author) {
            messageSetter(messageVar, author);
        }
        else {
            errorTogle(true);
        }
        setMessageVar('');
    };
    return ((0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: addMessageHandler }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, \u0431\u0443\u0434\u0435\u043C \u0440\u0430\u0434\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0448 \u043E\u0442\u0437\u044B\u0432!" }), (0, jsx_runtime_1.jsx)(core_1.TextField, { InputLabelProps: { shrink: true }, size: "small", inputRef: (input) => input === null || input === void 0 ? void 0 : input.focus(), error: error, helperText: error ? nameError : false, id: "filled-basic", label: "Message", value: messageVar, color: "primary", name: "message", variant: "filled", placeholder: "Type your message", onChange: handleChange }), (0, jsx_runtime_1.jsx)(core_1.TextField, { InputLabelProps: { shrink: true }, size: "small", inputRef: (input) => input === null || input === void 0 ? void 0 : input.focus(), error: error, helperText: error ? nameError : false, id: "filled-basic", label: "Message", value: messageVar, color: "primary", name: "author", variant: "filled", placeholder: "Type your message", onChange: handleChange }), (0, jsx_runtime_1.jsx)("button", Object.assign({ "data-testid": "addmessage", type: "submit", variant: "contained", size: "large", color: "default" }, { children: "Send message" }))] })));
};
exports.MessageForm = MessageForm;
