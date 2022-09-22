"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MessageList = ({ messageList }) => ((0, jsx_runtime_1.jsx)("ul", Object.assign({ "data-testid": "messagelist" }, { children: messageList.map((message, index) => ((0, jsx_runtime_1.jsxs)("li", { children: ["C\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442: ", message.author, " ", (0, jsx_runtime_1.jsx)("br", {}), "\u0422\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F: ", message.text, (0, jsx_runtime_1.jsx)("hr", {})] }, index))) })));
exports.MessageList = MessageList;
