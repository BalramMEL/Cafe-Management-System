

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";
import AdminRegister from "./AdminRegister";
import  AllCafe  from "./AllCafe";
import AddCategories from "./AddCategory"
import AllCategories from './AllCategories'

export function Admin(){
    return(
        <BrowserRouter>
        
        
            <Routes>
            <Route path="/adminNavigation" element={<NavbarAdmin/>}/>
                
                <Route path="/registerAdmin" element={<AdminRegister/>}/>
                <Route path="/addCategory" element={<AddCategories/>}/>
                {/* <Route path="/registerAdmin" element={<AdminRegister/>}/> */}
                <Route path="/allCatrgories" element={<AllCategories/>}/>
                <Route path="/allCafes" element={<AllCafe/>}/>
                


                
            </Routes>
        </BrowserRouter>
    )
}