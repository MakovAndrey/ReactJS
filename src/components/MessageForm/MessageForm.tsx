import { TextField, Button } from '@material-ui/core';
import React, { FC, useState } from 'react';

interface AddMessageProps {
  messageSetter: (message: string, author: string) => void;
  author: string;
}

export const MessageForm: FC<AddMessageProps> = ({ messageSetter }) => {
  const [error, setError] = useState(false);
  const [messageVar, setMessageVar] = useState('');
  const [author] = useState('');

  const errorName = 'Заполните все необходимые поля!';

  const errorTogle = (state: boolean) => {
    setError(state);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageVar(e.currentTarget.value);
    setError(false);
  };

  const addMessageHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (messageVar && author) {
      messageSetter(messageVar, author);
    } else {
      errorTogle(true);
    }
    setMessageVar('');
  };

  return (
    <form onSubmit={addMessageHandler}>
      <h3>Добро пожаловать, будем рады увидеть ваш отзыв!</h3>
      <TextField
        InputLabelProps={{ shrink: true }}
        size="small"
        inputRef={(input) => input?.focus()}
        error={error}
        helperText={error ? errorName : false}
        id="filled-basic"
        label="Message"
        value={messageVar}
        color="primary"
        name="message"
        variant="filled"
        placeholder="Type your message"
        onChange={handleChange}
      />

      <TextField
        InputLabelProps={{ shrink: true }}
        size="small"
        inputRef={(input) => input?.focus()}
        error={error}
        helperText={error ? errorName : false}
        id="filled-basic"
        label="Message"
        value={messageVar}
        color="primary"
        name="author"
        variant="filled"
        placeholder="Type your message"
        onChange={handleChange}
      />

      <Button
        data-testid="addmessage"
        type="submit"
        variant="contained"
        size="large"
        color="default"
      >
        Send message
      </Button>
    </form>
  );
};
