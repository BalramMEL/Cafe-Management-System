import { BrowserRouter, Route,Routes } from "react-router-dom";
import AddFood from "./AddFood";
import CafeNavbar from "./CafeNavbar";
import MyOrder from "./CafeOrder";
import AboutUs from "../AboutUs/AboutUs"
import ViewMyItems from "./viewMyItem";


export function Cafe(){

    return(
        <BrowserRouter>
        <CafeNavbar/>
            <Routes>
                <Route path="/aboutUs" element={<AboutUs/>} />
                <Route path="/view-my-items" element={<ViewMyItems/>} />
                <Route path="/reastuarantOrder" element={<MyOrder/>}/>
                <Route path="/addFood" element={<AddFood/>}/>
            </Routes>
        </BrowserRouter>
    )
}