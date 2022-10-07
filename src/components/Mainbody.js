import React from 'react'
import StorageIcon  from "@material-ui/icons/Storage";
import ArrowDropDownwardIcon  from "@material-ui/icons/ArrowDropDown";
import FolderOpenIcon  from "@material-ui/icons/FolderOpen";
import {IconButton} from '@material-ui/core';
import doc_image from "./images/react.png"
import MoreVertIcon from '@material-ui/icons/More';
import './Mainbody.css';

function Mainbody(){
    return(
        <div className="mainbody">
            <div className="mainbody_top">
                <div className="mainbody_top_left" style={{fontSize:'16px',fontweight:'500'}}>
                    Recent forms                                        
                </div>
                <div className="mainbody_top_right">
                <div className="mainbody_top_center" style={{fontSize:"14px",marginRight:"125px"}}> Owned by anyone <ArrowDropDownwardIcon/><ArrowDropDownwardIcon></ArrowDropDownwardIcon></div>
                    <IconButton>
                        <StorageIcon style={{fontSize:"16px",color:"black"}}/>
                    </IconButton> 
                    <IconButton>
                        <FolderOpenIcon style={{fontSize:"16px",color:"black"}} />
                    </IconButton>   
                
                </div>
            </div>
            <div className="mainbody_docs">
                <div className="doc_card">
                    <img src={doc_image} className='doc_image'/>
                    <div className="doc_card_content">
                        <h5></h5>
                        <div className="doc_content" style={{fontSize:'12px',color:"grey"}}>
                            <div className="content_left">
                                <StorageIcon style={{fontSize:"12px",color:"white",background:"#6E2594",padding:"3px",marginRight:"2px",border:"2px"}}/>
                            </div>
                            <MoreVertIcon style={{fontSize:"16px",color:"grey"}}/>
                        </div>
                    </div>
                </div>
            </div>
       </div>
     
        
    )
}
export default Mainbody