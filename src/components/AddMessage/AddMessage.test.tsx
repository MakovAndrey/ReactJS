import { AddMessage } from "./AddMessage";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe ('AddMessage', () => {

    it("Form render",() => {
        const { container } = render(<AddMessage addMessage={AddMessage} />);
        expect(container.querySelector("input")).toBe;
        expect(container.querySelector("button")).toBe;    
    })

    it ("add message", () =>{
        const { container } = render(<AddMessage addMessage={AddMessage} />);
        fireEvent.change(container.querySelector("input"), {
            target: { value: "message" },
        });
        expect(container.querySelector("input").value).toBe("message");
    });
})
