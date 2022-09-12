export const MessageList = ({ messageList }) => {
    <ul>
        {messageList.map((message, index) => (
            <li key={index}>
                Cообщение от: {message.author} <br />
                Текст сообщения: {message.text}
            </li>
        ))}
    </ul>;
};
