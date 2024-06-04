import { Link } from "react-router-dom";
import image1 from "../assets/residuos.webp";
import image2 from "../assets/residuos.webp";
import image3 from "../assets/residuos.webp";
import image4 from "../assets/residuos.webp";
import { RiRecycleFill } from "react-icons/ri";
import "./card.css";

const content = [
  {
    id: 1,
    name: "Lorem",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image2,
  },
  {
    id: 2,
    name: "Lorem",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image1,
  },
  {
    id: 3,
    name: "Lorem",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image3,
  },
  {
    id: 4,
    name: "Lorem",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image4,
  },
  {
    id: 5,
    name: "Lorem",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image4,
  },
  {
    id: 6,
    name: "Lorem",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image4,
  },
  {
    id: 7,
    name: "Lorem",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image4,
  },
  {
    id: 8,
    name: "Lorem",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image4,
  },
];

function Card() {
  return (
    <div className="all">
      <div className="principal-title">
        <h1>Produtos principais</h1>
        <RiRecycleFill className="flight" />
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
