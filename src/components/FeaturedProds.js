import ReactStars from "react-rating-stars-component";
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

function FeaturedProds() {
    return (
        <div>
            <Slider {...settings} className='slider'>
                <div>
                    <div className="slider-content">
                        <Container fluid>
                            <Row align="center" style={{ marginTop: '20px' }}>
                                <Col>
                                    <img src={require("../img/products/featured-prod1.png")} />
                                </Col>
                                <Col>
                                    <h3>Beats Solo 2 On Ear Headphones - Black</h3>
                                    <div >
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            value={4.5}
                                            isHalf={true}
                                            emptyIcon={<i className="fa-regular fa-star"></i>}
                                            halfIcon={<i className="fa-solid fa-star-half"></i>}
                                            fullIcon={<i className="fa-solid fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <h5>
                                        <span style={{ color: '#FF4858', marginRight: '10px', fontSize: '16px' }}>$499</span>
                                        <span style={{ color: '#C1C8CE', textDecoration: 'line-through', fontSize: '16px' }}>$599</span>
                                    </h5>
                                </Col>

                            </Row>
                        </Container>
                    </div>

                </div>
                <div>
                    <div className="slider-content">
                        <Container fluid>
                            <Row align="center" style={{ marginTop: '20px' }}>
                                <Col>
                                    <img src={require("../img/products/featured-prod2.png")} />
                                </Col>
                                <Col>
                                    <h3>H-Squared tvTray</h3>
                                    <div >
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            value={4.5}
                                            isHalf={true}
                                            emptyIcon={<i className="fa-regular fa-star"></i>}
                                            halfIcon={<i className="fa-solid fa-star-half"></i>}
                                            fullIcon={<i className="fa-solid fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <h5>
                                        <span style={{ color: '#FF4858', marginRight: '10px', fontSize: '16px' }}>$499</span>
                                        <span style={{ color: '#C1C8CE', textDecoration: 'line-through', fontSize: '16px' }}>$599</span>
                                    </h5>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="slider-content">
                        <Container fluid>
                            <Row align="center" style={{ marginTop: '20px' }}>
                                <Col>
                                    <img src={require("../img/products/featured-prod3.png")} />
                                </Col>
                                <Col>
                                    <h3>Netatmo Rain Gauge</h3>
                                    <div >
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            value={4.5}
                                            isHalf={true}
                                            emptyIcon={<i className="fa-regular fa-star"></i>}
                                            halfIcon={<i className="fa-solid fa-star-half"></i>}
                                            fullIcon={<i className="fa-solid fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <h5>
                                        <span style={{ color: '#FF4858', marginRight: '10px', fontSize: '16px' }}>$499</span>
                                        <span style={{ color: '#C1C8CE', textDecoration: 'line-through', fontSize: '16px' }}>$599</span>
                                    </h5>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="slider-content">
                        <Container fluid>
                            <Row align="center" style={{ marginTop: '20px' }}>
                                <Col>
                                    <img src={require("../img/products/featured-prod1.png")} />
                                </Col>
                                <Col>
                                    <h3>Beats Solo 2 On Ear Headphones - Black</h3>
                                    <div >
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            value={4.5}
                                            isHalf={true}
                                            emptyIcon={<i className="fa-regular fa-star"></i>}
                                            halfIcon={<i className="fa-solid fa-star-half"></i>}
                                            fullIcon={<i className="fa-solid fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <h5>
                                        <span style={{ color: '#FF4858', marginRight: '10px', fontSize: '16px' }}>$499</span>
                                        <span style={{ color: '#C1C8CE', textDecoration: 'line-through', fontSize: '16px' }}>$599</span>
                                    </h5>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="slider-content">
                        <Container fluid>
                            <Row align="center" style={{ marginTop: '20px' }}>
                                <Col>
                                    <img src={require("../img/products/featured-prod1.png")} />
                                </Col>
                                <Col>
                                    <h3>Beats Solo 2 On Ear Headphones - Black</h3>
                                    <div >
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            value={4.5}
                                            isHalf={true}
                                            emptyIcon={<i className="fa-regular fa-star"></i>}
                                            halfIcon={<i className="fa-solid fa-star-half"></i>}
                                            fullIcon={<i className="fa-solid fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <h5>
                                        <span style={{ color: '#FF4858', marginRight: '10px', fontSize: '16px' }}>$499</span>
                                        <span style={{ color: '#C1C8CE', textDecoration: 'line-through', fontSize: '16px' }}>$599</span>
                                    </h5>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="slider-content">
                        <Container fluid>
                            <Row align="center" style={{ marginTop: '20px' }}>
                                <Col>
                                    <img src={require("../img/products/featured-prod1.png")} />
                                </Col>
                                <Col>
                                    <h3>Beats Solo 2 On Ear Headphones - Black</h3>
                                    <div >
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            value={4.5}
                                            isHalf={true}
                                            emptyIcon={<i className="fa-regular fa-star"></i>}
                                            halfIcon={<i className="fa-solid fa-star-half"></i>}
                                            fullIcon={<i className="fa-solid fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <h5>
                                        <span style={{ color: '#FF4858', marginRight: '10px', fontSize: '16px' }}>$499</span>
                                        <span style={{ color: '#C1C8CE', textDecoration: 'line-through', fontSize: '16px' }}>$599</span>
                                    </h5>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default FeaturedProds