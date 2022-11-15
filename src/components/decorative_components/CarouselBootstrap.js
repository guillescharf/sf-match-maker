import Carousel from 'react-bootstrap/Carousel';
import '../../assets/stylesheets/decorative_components/CarouselBootstrap.css'
import image1 from '../../assets/image/group1.png';
import image2 from '../../assets/image/imagen02.png';
import image3 from '../../assets/image/imagen03.png';
function CarouselBootstrap() {
  return (
    <Carousel>
      <Carousel.Item interval={20000}>
        <img
          className="d-block w-100 img-carousel"
          src={image1}
          
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Crea grupos de trabajo heterogéneos con equidad</h3>
          <p>La riqueza está en la diversidad</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img-carousel"
          src={image2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img-carousel"
          src={image3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBootstrap;