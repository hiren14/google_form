import MoreVectIcon from '@material-ui/icons/MoreVert';
import { IconButton } from "@material-ui/core";
import UnFoldMoreIcon from '@material-ui/icons/UnfoldMore';
import uuid from 'react-uuid';
import './Template.css';
import img from "../components/plus.png";

import img1 from "../components/contact.png";
import { useNavigate } from 'react-router-dom'
function Template() {
    let navigate = useNavigate();
    const createFrom = () => {
        console.log('click')
        const id_ = uuid();
        console.log(id_)

        navigate("/form/" + id_, { replace: true })
    }
    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{ fontSize: "16px", color: "#202124" }}>
                        Start New form </span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">
                        Template gallery
                        <UnFoldMoreIcon />

                    </div>
                    <IconButton>
                        <MoreVectIcon />
                    </IconButton>
                </div>

                {/* error is to slove card */}
                <div className='templete_body'>
                    <div className='card' onClick={createFrom}>
                        <img src={img} alt="blank" className='card_image' />
                        <p className='card_title'>Blank</p>
                    </div>

                </div>
                {/* <div className='card'>
                    <img src={img} alt="blank" className='card_image' />
                    <p className='card_title'>party</p>
    </div>*/}
                <div className='card'> 
                    <img src={img1} alt="blank" className='card_image' />
                    <p className='card_title'>contact</p>


                </div>

            </div>
        </div>

    )
}
export default Template