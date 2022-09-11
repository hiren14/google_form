import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import {IconButton} from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './Drawer.css';
function TempDrawer() {
    const [state,setState] = React.useState({
            left: false
        })
    const toggleDrwarer = (anchor,open) =>(event) =>{
        setState({...state,[anchor]:open});

    };
   
    return(    
    <div>
        <React.Fragment>  
         <IconButton onClick={toggleDrwarer("left",true)}>

            <MenuIcon />
          
         </IconButton>
         <Drawer open= {state['left']} onClose={toggleDrwarer("left",false)} anchor ={'left'} >
              {/*/ for list view in sidebar*/}
                <List>
                  <div className='list_item'>
                    <ListItem>
                        Sidebar
                    </ListItem>
                    </div>
                </List>
                </Drawer>
        </React.Fragment>
    </div>
)
}
export default TempDrawer