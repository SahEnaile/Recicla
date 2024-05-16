import image1 from '../assets/family.jpg'
import { FaHotel } from "react-icons/fa6";
import { CiWifiOn } from "react-icons/ci";
import { GiSchoolBag } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import './prom.css'


function Prom() {
    return(
        <div className="promotion">
           <img src={image1} alt="" />
           <div className="caption">
                <h1>  Lorem ipsum dolor sit amet consectetur</h1> 
                <p>adipisicing elit. Delectus hic, cupiditate  odio <br /> nostrum praesentium est saepe corrupti</p>
            <div className="icons">
                <div className="con">
                <CiWifiOn className='icon'/>
                <p>Lorem ipsum, dolor sit.</p>
                </div>
                <div className="con">
                <FaHotel className='icon'/>
                <p>Lorem ipsum, dolor sit. </p>
                </div>
                <div className="con">
                <GiSchoolBag className='icon' />
                <p>Lorem ipsum, dolor sit.</p>   
                </div>
                <div className="con">
                <IoFastFoodOutline className='icon'/>
                <p>Lorem ipsum, dolor sit.</p>
                </div>
           </div>
           </div>
        </div>
    )
}
export default Prom