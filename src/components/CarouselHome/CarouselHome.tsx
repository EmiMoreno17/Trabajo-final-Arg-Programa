
import { Carousel } from 'react-bootstrap'

const CarouselHome = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img className='d block w-100' style={{maxHeight: "500px", objectFit: 'cover'}} src="https://i.pinimg.com/564x/33/f8/5a/33f85ae4b62c8bbaf20283852fa74655.jpg" alt="img1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='d block w-100' style={{maxHeight: "500px", objectFit: 'cover'}} src="https://i.pinimg.com/564x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg" alt="img2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='d block w-100' style={{maxHeight: "500px", objectFit: 'cover'}} src="https://i.pinimg.com/564x/5b/a9/82/5ba9821517a3720c8cef32596f46a062.jpg" alt="img3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome