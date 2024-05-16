import { Link } from 'react-router-dom'
import image1 from "../assets/paris.jpg"
import image2 from "../assets/egito.jpg"
import image3 from "../assets/lodres.jpg"
import image4 from "../assets/kyoto.jpg"
import { PiAirplaneInFlightDuotone } from "react-icons/pi";
import './card.css'

const content = [
    {
        id: 1,
        name: "Egito",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: image2,
      },
      {
        id: 2,
        name: "Paris",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",    
        image: image1,
      },
      {
        id: 3,
        name: "Londres",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: image3,
      },
      {
        id: 4,
        name: "Kyoto",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: image4,
      },
            
    ];

function Card() {
    return (
      <div className="all">
        <div className="xereca">
          <h1>Descubra sua próxima viagem</h1> 
          <PiAirplaneInFlightDuotone className='flight'/>
        </div>
        <div className="card-group">
            {content.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt="" />
              <div className="info">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <div className="btn-course">
                  <Link to={`details/${item.id}`}>Saiba mais</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
      
export default Card;