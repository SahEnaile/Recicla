import "./services.css";
import { CiDollar } from "react-icons/ci";
import { PiRecycleThin } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";

function Services() {
  return (
    <>
      <div className="principal">
        <h1>Nossos Serviços</h1>
        <p>Conheça os serviços da Recicla</p>
      </div>
      <div className="circles">
        <div className="align">
          <div className="circle-1">
            <CiDollar className="icon-service" />
          </div>
          <h1>lorem</h1>
        </div>
        <div className="align">
          <div className="circle-2">
            <PiRecycleThin className="icon-service" />
          </div>
          <h1>lorem</h1>
        </div>
        <div className="align">
          <div className="circle-3">
            <IoEarthOutline className="icon-service" />
          </div>
          <h1>lorem</h1>
        </div>
        <div className="align">
          <div className="circle-4">
            <CiDollar className="icon-service" />
          </div>
          <h1>lorem</h1>
        </div>
      </div>
    </>
  );
}

export default Services;
