import { Carousel } from "react-bootstrap";


const Slider = ()=>{
    return(
                <Carousel variant="dark">
                    <Carousel.Item className="slider_container__carousel_item" interval={1000} >
                    <img
                       className="d-block"
                        src="http://localhost:7000/imgC.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="slider_container__carousel_item" interval={1500}>
                    <img
                        className="d-block"
                        src="http://localhost:7000/rs.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
       
    )
}

export default Slider;