import React from 'react'
import FolderOpenIcon  from "@material-ui/icons/FolderOpen";
import StorageIcon  from "@material-ui/icons/Storage";
import {IconButton} from '@material-ui/core';
import formimage from "./images/react.png"
import './Mainbody.css';
import ArrowDropDownwardIcon  from "@material-ui/icons/ArrowDownwardSharp";

function Mainbody(){
    return(
        <div className="mainbody">
            <div className="mainbody_top">
                <div className="mainbody_top_left" style={{fontSize:'16px',fontweight:'500'}}>
                    Recent forms                                        
                </div>
                <div className="mainbody_top_right">
                <div className="mainbody_top_center" style={{fontSize:"14px",marginRight:"125px"}}> Owned
                    <IconButton>
                        <StorageIcon style={{fontSize:"16px",color:"black"}}/>

                    </IconButton> 
                        <IconButton>
                            <FolderOpenIcon style={{fontSize:"16px",color:"black"}} />

                        </IconButton>   
                </div>
                
            </div>
            
            <div className="mainbody_docs">
                {/* <div className="mainbody_docs"> */}
                <div className="doc_card">
                <img src={formimage} className='doc_img'/>
                    <div className="doc_card_content">
                    <h5></h5>
            <div className="doc_content">
                                <div className="content_left">

                </div>
                              
            </div>
                        <StorageIcon style={{fontSize:"12px",color:"white",background:"#6E2594",padding:"3px",marginRight:"2px",border:"2px"}}/>
   
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Mainbody