import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Contact from "../Contact";
describe("Contact us page Test case",() =>{
    // beforeAll(() =>{
    //     console.log("Before all");
    // });
    // beforeEach(() =>{
    //     console.log("Before each");
    // });
    // afterAll(() =>{
    //     console.log("After all");
    // });
    // afterEach(() =>{
    //     console.log("After Each");
    // });
it("Should load Contact us page",() =>{
    //Rendering
    render(<Contact/>);
    //Querying
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
})
it("Should load button inside Contact us page",() =>{
    render(<Contact/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})
it("Should load all inputs  inside Contact us page",() =>{
    render(<Contact/>);
    const input = screen.getAllByRole("textbox");
    // expect(input[0]).toBeInTheDocument();
      expect(input.length).toBe(2);
    // console.log(input);
})
});
