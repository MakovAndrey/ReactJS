// import React from "react";

export function MessageForm({messageSetter}) {
    const addMessageHandler = (e) => {
        e.preventDefault();
        messageSetter(e.target.message.value, e.target.name.value);
            e.target.message.value = "";
            e.target.author.value = "";
    };

    return (
        <form onSubmit={addMessageHandler}>
            <h3>Добро пожаловать, будем рады увидеть ваш отзыв!</h3>
            <input
                type="text"
                name="message"
                placeholder="Write your message"
            />
            <input 
                type="text"
                name="author" 
                placeholder="Write your name" 
            />
            <button>Send message</button>
        </form>
    );
}
