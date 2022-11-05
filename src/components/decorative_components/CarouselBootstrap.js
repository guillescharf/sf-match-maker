import Carousel from 'react-bootstrap/Carousel';
import '../../assets/stylesheets/decorative_components/CarouselBootstrap.css'

function CarouselBootstrap() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img-carousel"
          src="https://puentedelmundo.com/wp-content/uploads/2021/01/pexels-sharon-mccutcheon-1209843.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Imagen descriptiva 1</h3>
          <p>Muestra alguna utilidad de la app, valor, etc</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img-carousel"
          src="https://puentedelmundo.com/wp-content/uploads/2021/01/pexels-sharon-mccutcheon-1209843.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Imagen descriptiva 2</h3>
          <p>Muestra alguna utilidad de la app, valor, etc</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img-carousel"
          src="https://puentedelmundo.com/wp-content/uploads/2021/01/pexels-sharon-mccutcheon-1209843.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Imagen descriptiva 3</h3>
          <p>Muestra alguna utilidad de la app, valor, etc</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBootstrap;