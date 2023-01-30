import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const [role, setRole] = useState("");
    useEffect(() => {
      let path = location.pathname;
      path = path.split("/");
      if(path[1]=="admin"){
        setRole("admin");
      }
      else{
        setRole("sec");
      }
      //console.log(role)
    }, [location.pathname])

  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));



  // EDIT HERE IF PAGES NEED TO ADD

    const pages = [];

    
    if(role=="sec"){
          pages.push({ text:"Home", href:"/", icon:"fa fa-home" })
          pages.push({ text:"Educations", href:"/educations", icon:"fa fa-graduation-cap" })
          pages.push({ text:"Skills", href:"/skills", icon:"fa fa-cogs" })
          pages.push({ text:"Experience", href:"/experience", icon:"fa fa-code" })
          pages.push({ text:"Projects", href:"/projects", icon:"fa fa-tasks" })
          pages.push({ text:"Honors & Awards", href:"/awards", icon:"fa fa-trophy" })
          pages.push({ text:"Contacts", href:"/contacts", icon:"fa fa-phone-square" })
          pages.push({ text:"Personal Details", href:"/personal_details", icon:"fa fa-user-circle-o" })
          pages.push({ text:"CP Profile", href:"/cp_profile", icon:"fa fa-code" })
          pages.push({ text:"Download Resume", href:"/download_resume", icon:"fa fa-download" })
    }



  return (
    <React.Fragment>
      <AppBar sx={{ background: "#0052a3" }}  style={{zIndex:"11555"}}>
        <Toolbar style={{padding:"10px 8px 8px 8px"}}>
          <font size='5' style={{marginLeft:"10px"}}>ANUPAM's Portfolio</font>
          
          {isMatch ? (
            <>
              <DrawerComp data = {pages}/>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {pages.map((page, index) => (
                <Tab label={page.text} onClick={()=>navigate(page.href)} />
                ))}
                

              </Tabs>


            </>
          )}
        </Toolbar>
      </AppBar><br/><br/><br/>
    </React.Fragment>
  );
};

export default Header;