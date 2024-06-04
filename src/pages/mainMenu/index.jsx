import Services from "../../components/Services";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Prom from "../../components/Prom";

function MainMenu() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Services />
      <Prom />
      <Footer />
    </div>
  );
}

export default MainMenu;
