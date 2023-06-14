import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "./assets/carousel1.jpg";
import carousel2 from "./assets/carousel2.jpg";
import carousel3 from "./assets/carousel3.jpg";


export function ScrollPictures() {
  return (
    <div id="carousel">
    <Carousel className="w-100">
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={ carousel1 }
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ carousel2 }
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ carousel3 }
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ScrollPictures;
