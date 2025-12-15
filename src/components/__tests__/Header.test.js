import {render,screen,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import appStore from "../../utils/appStore";
import useOnlineStatus from "../../utils/useOnlineStatus";
jest.mock("../../utils/useOnlineStatus");


it("Should Render Header Component",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
const loginButton=screen.getByRole("button",{name:"Login"})
expect(loginButton).toBeInTheDocument();

})

it("Should Render Header Component with Cart item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
const cartItems = screen.getByText("Cart : 0 Items")
expect(cartItems).toBeInTheDocument();

})
it("Should change Login button to Logout button on click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
const loginButton=screen.getByRole("button",{name:"Login"})
expect(loginButton).toBeInTheDocument();
fireEvent.click(loginButton);
const logoutButton=screen.getByRole("button",{name:"Logout"})
expect(loginButton).toBeInTheDocument();
fireEvent.click(loginButton);
expect(logoutButton).toBeInTheDocument();
})

it("Should show offline status",()=>{
     useOnlineStatus.mockReturnValue(false);
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
const offlineText = screen.getByText("Online Status🔴");
expect(offlineText).toBeInTheDocument();

})

