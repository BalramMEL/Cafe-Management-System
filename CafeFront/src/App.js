// import logo from './logo.svg';
import "./App.css";
import AddFood from "./Components/Cafe/AddFood";
import foodCard from "./Components/Cafe/foodCard";
import Login from "./Components/Home/login";
import NavbarAdmin from "./Components/Admin/NavbarAdmin";
import AdminRegister from "./Components/Admin/AdminRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./Components/Admin/Admin";
import HomeNavbar from "./Components/Home/HomeNavbar";
import { Home } from "./Components/Home/Home";
import { Customer } from "./Components/customer/Customer";
import { Cafe } from "./Components/Cafe/Cafe";
import AllCategories from "./Components/Admin/AllCategories";
import AboutUs from "./Components/AboutUs/AboutUs";
import RegisterCafe from "./Components/Home/RegisterCafe";
import RegisterCustomer from "./Components/Home/RegistrationCustomer";
import CustomerNavbar from "./Components/customer/CustomerNavbar";
import MyCart from "./Components/customer/MyCart";
import MyOrder from "./Components/customer/MyOrder";
import CafeNavbar from "./Components/Cafe/CafeNavbar";
import CafeOrder from "./Components/Cafe/CafeOrder";
import AllCafe from "./Components/Admin/AllCafe";
import CustomerLogin from "./Components/Home/CustomerLogin";
import CafeLogin from "./Components/Home/CafeLogin";
import AdminLogin from "./Components/Home/AdminLogin";
import AddCategory from "./Components/Admin/AddCategory";
import ContactUs from "./Components/ContactUs/ContactUs";
import HomePage from "./Components/Home/HomePage/HomePage";
import ViewMyItems from "./Components/Cafe/viewMyItem";
import CafeLogout from "./Components/Home/CafeLogout";

function App() {
  return (
    // <Login/>
    // <AddFood />
    // <foodCard/>

    // <Admin/>
    // <Home />
    // <Customer/>
    // <Cafe />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/admin" element={<Admin />} />
    //     <Route path="/customer" element={<Customer />} />
    //     <Route path="/cafe" element={<Cafe />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeNavbar />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/register-cafe" element={<RegisterCafe />} />
        <Route path="/register-customer" element={<RegisterCustomer />} />
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/cafe/login" element={<CafeLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        
      </Routes>

      <Routes>
        <Route path="/customer/dashboard" element={<CustomerNavbar />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/myOrder" element={<MyOrder />} />
        
      </Routes>
      <Routes>
        <Route path="/cafe/dashboard" element={<CafeNavbar />} />
        <Route path="/reastuarantOrder" element={<CafeOrder />} />
        <Route path="/addFood" element={<AddFood />} />
        <Route path="/viewMyItems" element={<ViewMyItems/>} />
      </Routes>
      <Routes>
        <Route path="/admin/dashboard" element={<NavbarAdmin />} />
        <Route path="/registerAdmin" element={<AdminRegister />} />
        <Route path="/addCategory" element={<AddCategory/>} />
        <Route path="/registerAdmin" element={<AdminRegister />} />
        <Route path="/allCatrgories" element={<AllCategories />} />
        <Route path="/allCafes" element={<AllCafe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <BrowserRouter>
//   {/* Your router component should wrap all routes */}
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/admin" element={<Admin />} />
//     <Route path="/customer" element={<Customer />} />
//     <Route path="/cafe" element={<Cafe />} />
//     {/* Add more routes as needed */}
//   </Routes>
// </BrowserRouter>
