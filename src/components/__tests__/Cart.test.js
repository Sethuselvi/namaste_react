import {render,act, fireEvent,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../../components/mocks/restMenumock.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import Header from "../Header";
import Cart from "../Cart";
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
})})

it("Should Load Restaurant Menu Component",async()=>{
 await act (async()=> render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <Cart/>
            <RestaurantMenu/>
            </Provider>
    </BrowserRouter>))

    const accordionHeader = screen.getByText("Signature Burgers(3)")
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(3);
    expect(screen.getByText("Cart : 0 Items")).toBeInTheDocument();
    const addBtns = screen.getAllByRole("button",{name:"Add +"})
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart : 1 Items")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart : 2 Items")).toBeInTheDocument();
     expect(screen.getAllByTestId("foodItems").length).toBe(5);
     fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
     expect(screen.getByText("Cart is Empty! Add Items to the cart!")).toBeInTheDocument();
})