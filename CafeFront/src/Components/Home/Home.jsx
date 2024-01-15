import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import HomeNavbar from "./HomeNavbar";
import RegisterCafe from "./RegisterCafe";
import foodCard from "./foodCard";
import RegisterCustomer from "./RegistrationCustomer"
import { Customer } from "../customer/Customer";
import { Cafe } from "../Cafe/Cafe";
import AboutUs from "../AboutUs/AboutUs"


export function Home() {
  return (
    <>
    <BrowserRouter>
          <HomeNavbar />
          <Routes>
            <Route path="/aboutUs" element={<AboutUs/>} />
            
            <Route path="/register-cafe" element={<RegisterCafe/>} />
            <Route path="/register-customer" element={<RegisterCustomer/>} />
            
            <Route path="/login" element={<Login />} />
            {/* 
            <Route path="/customer" element={<Customer/>} />
            <Route path="/cafe" element={<Cafe/>} />
            <Route path="/admin" element={Admin} /> */}
          </Routes>
        </BrowserRouter>
        <foodCard/>

    </>
    

  );
}
