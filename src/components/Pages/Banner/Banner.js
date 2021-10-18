import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/Banner/1.jpg';
import img2 from '../../../images/Banner/2.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold">“Once you start making the effort to ‘wake yourself up’—that is, be more mindful in your activities—you suddenly start appreciating life a lot more.” –Robert Biswas-Diener</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold">“Life doesn’t make any sense without interdependence. We need each other, and the sooner we learn that, the better for us all.” –Erik Erikson</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;