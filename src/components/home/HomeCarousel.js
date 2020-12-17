import React from "react";
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
    return (
        <>
            <Carousel fade={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "./images/carousel/carousel-1.jpg"}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "./images/carousel/carousel-2.jpg"}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + "./images/carousel/carousel-3.jpg"}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HomeCarousel;