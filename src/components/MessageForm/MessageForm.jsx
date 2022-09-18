import React from 'react';

export function MessageForm({ messageSetter }) {
  const addMessageHandler = (e) => {
    e.preventDefault();
    const { message } = e.target.elements;
    const { author } = e.target.elements;
    messageSetter(message.value, author.value);
    message.value = '';
    author.value = '';
  };

  return (
      <form data-testid="addmessage" onSubmit={addMessageHandler}>
          <h3>Добро пожаловать, будем рады увидеть ваш отзыв!</h3>
          <input type="text" name="message" placeholder="Write your message" />
          <input type="text" name="author" placeholder="Write your name" />
          <button>Send message</button>
      </form>
  );
}
