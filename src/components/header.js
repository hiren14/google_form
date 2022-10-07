import React from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
//import formimg from "./";
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import formimage from "./images/download.png"
import Avatar from '@material-ui/core/Avatar'
import TempDrawer from './TempDrawer'
import { Height } from "@material-ui/icons";
///import AvatarImg from "./";
function Header() {
  return (
    <div className="header">


      <div className="header_info">
        <img src={formimage} style={{ height: "40px", width: "55px" }} className="form_img" />
        <div className="info">
          Jan Suvidha Portal
        </div>
        <TempDrawer />


        <img src="{formimg}" alt="no img" />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input type="text" name="search" />
      </div>
      <div className="header_right">

        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar src="" />
        </IconButton>
      </div>
    </div>

  )
}

export default Header;