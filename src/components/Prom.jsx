import image1 from "../assets/coperprin.png";
import { FaHotel } from "react-icons/fa6";
import { CiWifiOn } from "react-icons/ci";
import { GiSchoolBag } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import "./prom.css";

function Prom() {
  return (
    <div className="promotion">
      <img src={image1} alt="" />
      <div className="caption">
        <h1> Lorem ipsum dolor sit amet consectetur</h1>
        <p>
          adipisicing elit. Delectus hic, cupiditate odio <br /> nostrum
          praesentium est saepe corrupti
        </p>
        <p>
          Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
          <br />
          Placeat debitis assumenda harum sit similique, dolores optio labore
          facilis aut vel sapiente veniam ad, neque voluptatum dignissimos
          consequatur modi? Nemo, beatae.
        </p>
      </div>
    </div>
  );
}
export default Prom;
