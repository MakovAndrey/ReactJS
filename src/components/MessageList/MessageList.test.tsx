import { MessageList } from "./MessageList";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe ('MessageList', () => {
    it ('expect render list', () => {
        const list = 
            { author: "USER", message: "message" };

        const { container } = render (<MessageList messages={[list]}  />);
        expect(container.querySelector("ul")).toContainHTML(
            `<ul class="messagelistUl"><li class="messagelistLi" data-testid="li">USER: message</li></ul>`
        );
    })
})