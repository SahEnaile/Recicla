import { useEffect, useState } from "react";
import image1 from "../assets/bannerrec.png";
import image2 from "../assets/banner_maldivas.jpg";
import image3 from "../assets/egypt.jpg";
import image4 from "../assets/turkey.jpg";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import "../components/carousel.css";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentImages, setCurrentImages] = useState(0);

  useEffect(() => {
    const randomImages = [{ id: 1, src: image1 }];

    setImages(randomImages);
    setCurrentImages(Math.floor(Math.random() * randomImages.length));
  }, []);

  const nextSlide = () => {
    setCurrentImages((currentImages + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImages((currentImages - 1 + images.length) % images.length);
  };
  return (
    <div className="Caurosel">
      <button className="prev" onClick={prevSlide}>
        <GrLinkPrevious />
      </button>
      {images.length > 0 && (
        <>
          <img src={images[currentImages].src} alt={`slide ${currentImages}`} />
          <div
            className={images[currentImages].id === 0 ? "info-btn" : "hidden"}
          >
            <h1>{images[currentImages].id} </h1>
          </div>
        </>
      )}
      <button className="next" onClick={nextSlide}>
        <GrLinkNext />
      </button>
    </div>
  );
};
export default Carousel;
