export const MessageList = ({ messageList }) => (
  <ul data-testid="messagelist">
    {messageList.map((message, index) => (
      <li key={index}>
        Cообщение от: {message.author} <br />
        Текст сообщения: {message.text}
        <hr />
      </li>
    ))}
  </ul>
);
