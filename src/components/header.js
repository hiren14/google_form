import React from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
// import formimg from "./";
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar'
import TempDrawer from './TempDrawer'
import formimage from './images/react.png'
// import { Height } from "@material-ui/icons";
///import AvatarImg from "./";
function Header() {
  return (
    <div className="header">


      <div className="header_info">
        <TempDrawer />
        <img src={formimage} style={{ height: "40px", width: "55px" }} className="form_img" />

          <div className="info">
            Jan Suvidha Portal
          </div>

      </div>

      <div className="header_search"  >
        <IconButton><SearchIcon /></IconButton>
        <input type="text" name="search" placeholder='Search'/>
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