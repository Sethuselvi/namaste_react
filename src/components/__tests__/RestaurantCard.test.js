import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../components/mocks/resCardmock.json";


it("Should render Restaurant Card component with props data",()=>{
    render(
       
    <RestaurantCard resData={MOCK_DATA.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0]}/>
   
);
const name = screen.getByText("Pizza Paradise")
expect(name).toBeInTheDocument();

})

