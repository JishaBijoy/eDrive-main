import LeftNav from "./LeftNav";
import LeftNavSubMenu from "./LeftNavSubMenu";
import axios from '../api/axios';
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import {useNavigate } from "react-router-dom";
import { GetLocalStorage, RemoveLocalStorage } from "../localStorage/LocalStorage";
let NAV_URL = "Home/GetUserPermission"



const NavContainerLeft = () => {
  const [menu,setMenu]=useState();
  const [subMenu,setSubMenu]=useState();
  const { setAuth } = useContext(AuthContext);
  let navigate = useNavigate()
    const loadFun = async (e) => {
      debugger
        let usr = GetLocalStorage('auth');
    
        try {
          const response = await axios.get(`${NAV_URL}?UserId=${usr.userID}`);     
          debugger 
          console.log(response.data)
          setMenu(response.data);
    
        } catch (err) {
          debugger;          
          navigate('/login', { replace: true });
          RemoveLocalStorage('auth');
          setAuth({})
        }
      }

useEffect(()=>{
    loadFun();
},[])

    return ( 
<>
{menu&&<LeftNav setSubMenu={setSubMenu} menu={menu}/>}
   <LeftNavSubMenu subMenu={subMenu}/>
</>
     
     );
}
 
export default NavContainerLeft;