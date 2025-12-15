import {fireEvent, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/resCardmock.json"
import {act} from "react";
import { BrowserRouter } from "react-router";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{ 
            return Promise.resolve(MOCK_DATA)
        },
    })
})
it("Should Search Res List for burger text input ",async ()=>{
   await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>))
    const resCardBeforeSearch = screen.getAllByTestId("resCard");
    expect(resCardBeforeSearch.length).toBe(9);
   const searchBtn = screen.getByRole("button",{name:"Search"});
   const searchInput = screen.getByTestId("searchInput");
//    console.log(searchInput);
   fireEvent.change(searchInput,{target:{value:"burger"}});
   fireEvent.click(searchBtn);
   //screen should load 1 resataurant cards
   const resCardAfterSearch = screen.getAllByTestId("resCard");
    expect(resCardAfterSearch.length).toBe(1);
})


it("Should Filter Restaurant ",async ()=>{
   await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>))
    const resCardBeforeFilter = screen.getAllByTestId("resCard");
    expect(resCardBeforeFilter.length).toBe(9);
   const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
   fireEvent.click(topRatedBtn);
   //screen should load 1 resataurant cards
   const resCardAfterFilter = screen.getAllByTestId("resCard");
    expect(resCardAfterFilter.length).toBe(5);
})


