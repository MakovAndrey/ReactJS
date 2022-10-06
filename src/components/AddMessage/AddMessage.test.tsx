// import { AddMessageForm } from "./AddMessageForm";
// import { fireEvent, render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { addMessageWithReply } from "src/store/messages/actions";

// describe ('AddMessage', () => {

//     it("Form render",() => {
//         const { container } = render(<AddMessageForm addMessage={addMessageWithReply} />);
//         expect(container.querySelector("input")).toBe;
//         expect(container.querySelector("button")).toBe;    
//     })

//     it ("add message", () =>{
//         const { container } = render(<AddMessageForm addMessage={addMessageWithReply} />);
//         fireEvent.change(container.querySelector("input"), {
//             target: { value: "message" },
//         });
//         expect(container.querySelector("input").value).toBe("message");
//     });
// })
