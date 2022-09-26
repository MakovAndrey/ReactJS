import { FC } from 'react';
import { Messages } from 'src/types';

interface MessageListProps {
  messageList: Messages;
}

export const MessageList: FC<MessageListProps> = ({ messageList }) => (
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
