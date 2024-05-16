import { useEffect, useState } from "react";
import image1 from "../assets/banner_behance.jpg"
import image2 from "../assets/banner_maldivas.jpg"
import image3 from "../assets/egypt.jpg"
import image4 from "../assets/turkey.jpg"
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import "../components/carousel.css"


const Carousel = () => {

    const [images, setImages] = useState([])
    const [currentImages, setCurrentImages] = useState(0)

    useEffect(() => {
        const randomImages = [
            image1,
            image2,
            image3,
            image4
        ]
        setImages(randomImages)
        setCurrentImages(Math.floor(Math.random() * randomImages.length))
    }, [])
    
    const nextSlide = () => {
        setCurrentImages((currentImages + 1) % images.length) 
    }

    const prevSlide = () => {
        setCurrentImages((currentImages - 1 + images.length) % images.length) 
    }
    return(
        <div className="Caurosel">
            <button className="prev" onClick={prevSlide} ><GrLinkPrevious /></button>
            <img src={images[currentImages]} alt={`slide ${currentImages}`} />
            <button className="next"  onClick={nextSlide} ><GrLinkNext  /></button>
        </div>
    )
}
export default Carousel