import Button from '@material-ui/core/Button'
import { Avatar } from '@material-ui/core'
import MoreVert from '@material-ui/icons/MoreVert'
import { ColorLens } from '@material-ui/icons'
import { FiStar, FiSettings } from 'react-icons/fi'
import { AiOutLineEye } from 'react-icons/ai'
import IconButton from '@material-ui/core'
function Formheader() {
    return (
        <div className="form_header">
            <div className="form_header_left">
                <img src={'./'} style={{height:"45px",width:"40px"}} />
            <input type="text" placeholder="Untitled form" className="form_name"  />
        </div>
<FiStar className='form_header_icon' style={{marginRight:'10px'}}/>
<span style={{fontSize:"12px",fontWeight:"600"}}> All Changes saved in Cloud 
</span>

</div >

    )
}
export default Formheader 