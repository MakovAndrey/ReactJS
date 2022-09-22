import { MessageList } from "./MessageList";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("MessageList", () => {
    it("expect render list", () => {
        const list = [
            { author: "Kirill", text: "message" },
            { author: "Anna", text: "message" },
        ];
        const { container } = render(<MessageList messageList={list} />);
        expect(container.querySelector("ul")).toContainHTML(
            `<ul data-testid="messagelist"><li>Cообщение от: Kirill <br />Текст сообщения: message<hr /></li><li>Cообщение от: Anna <br />Текст сообщения: message<hr /></li></ul>`
        );
    });
});