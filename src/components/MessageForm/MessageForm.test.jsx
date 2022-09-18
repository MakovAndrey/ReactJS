import { MessageForm } from "./MessageForm";
import { render, fireEvent } from "@testing-library/react";

describe("AddMessage", () => {
    let app, setterMessage;

    beforeEach(() => {
        setterMessage = jest.fn();
        app = render(
            <MessageForm messageSetter={setterMessage} author="Kirill" />
        );
    });

    it("expect send AddMessage form without ERRORS", () => {
        fireEvent.change(app.getByPlaceholderText("Write your message"), {
            target: { value: "message" },
        });

        expect(app.getByPlaceholderText("Write your message").value).toBe(
            "message"
        );

        fireEvent.submit(app.getByTestId("addmessage"));

        expect(app.getByPlaceholderText("Write your message").value).toBe("");

        expect(setterMessage).toHaveBeenCalledTimes(1);
    });
});
