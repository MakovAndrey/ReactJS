import { App } from './App';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  let app;

  beforeEach(() => {
    jest.useFakeTimers();
    app = render(<App />);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('App testing BOT answer', () => {
    fireEvent.change(app.getByPlaceholderText('Write your message'), {
      target: { value: 'message' },
    });
    fireEvent.submit(app.getByTestId('addmessage'));
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(app.getByTestId('messagelist').lastChild).toContainHTML(
      '<li>Cообщение от: Администратор <br />Текст сообщения: Спасибо за ваш отзыв!<hr /></li>'
    );
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(app.getByTestId('messagelist')).toContainHTML(
      '<ul data-testid="messagelist"><li>Cообщение от:  <br />Текст сообщения: message<hr /></li><li>Cообщение от: Администратор <br />Текст сообщения: Спасибо за ваш отзыв!<hr /></li></ul>'
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    fireEvent.change(app.getByPlaceholderText('Write your message'), {
      target: { value: 'message' },
    });
    fireEvent.submit(app.getByTestId('addmessage'));
    fireEvent.change(app.getByPlaceholderText('Write your message'), {
      target: { value: 'message' },
    });
    fireEvent.submit(app.getByTestId('addmessage'));
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(app.getByTestId('messagelist')).toContainHTML(
      '<ul data-testid="messagelist"><li>Cообщение от:  <br />Текст сообщения: message<hr /></li><li>Cообщение от: Администратор <br />Текст сообщения: Спасибо за ваш отзыв!<hr /></li><li>Cообщение от:  <br />Текст сообщения: message<hr /></li><li>Cообщение от:  <br />Текст сообщения: message<hr /></li><li>Cообщение от: Администратор <br />Текст сообщения: Спасибо за ваш отзыв!<hr /></li></ul>'
    );
  });
});
