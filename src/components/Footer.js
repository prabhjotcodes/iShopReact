import React from 'react'
import { Container, Row, Col } from 'react-grid-system';

function Footer() {
    return (
        <div>

            <Container fluid id='footer'>
                <Row className='row'>
                    <Col className='col' >
                        <img style={{ width: '104px', height: '28px' }} src={require("../img/logo-f.png")} />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                        </p>
                    </Col>
                    <Col className='col' >
                        <h2>Follow Us</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                        </p>
                        <span>
                            <i style={{ color: '#385C8E', marginRight: '30px', cursor: 'pointer' }} class="fa-brands fa-facebook-f"></i>
                            <i style={{ color: '#03A9F4', cursor: 'pointer' }} class="fa-brands fa-twitter"></i>
                        </span>
                    </Col>
                    <Col className='col' >
                        <h2>Contact Us</h2>
                        <p>
                            iShop: address @building 124 <br />Call us now: 0123-456-789
                            <br />Email: support@whatever.com
                        </p>
                    </Col>
                </Row>
                <br />
                <Row className='row row-2'>
                    <Col className='col' >
                        <h2>Information</h2>
                        <a>About Us</a>
                        <a>Information</a>
                        <a>Privacy Policy</a>
                        <a>Terms & Conditions</a>
                    </Col>
                    <Col className='col' >
                        <h2>Service</h2>
                        <a>About Us</a>
                        <a>Information</a>
                        <a>Privacy Policy</a>
                        <a>Terms & Conditions</a>
                    </Col>
                    <Col className='col' >
                        <h2>Extras</h2>
                        <a>About Us</a>
                        <a>Information</a>
                        <a>Privacy Policy</a>
                        <a>Terms & Conditions</a>
                    </Col>
                    <Col className='col' >
                        <h2>My Account</h2>
                        <a>About Us</a>
                        <a>Information</a>
                        <a>Privacy Policy</a>
                        <a>Terms & Conditions</a>
                    </Col>
                    <Col className='col' >
                        <h2>Useful Links</h2>
                        <a>About Us</a>
                        <a>Information</a>
                        <a>Privacy Policy</a>
                        <a>Terms & Conditions</a>
                    </Col>
                    <Col className='col' >
                        <h2>Our Offers</h2>
                        <a>About Us</a>
                        <a>Information</a>
                        <a>Privacy Policy</a>
                        <a>Terms & Conditions</a>
                    </Col>
                </Row>
                <Row className='row' justify='end'>
                    <Col sm={4} className='col'>
                        <h3>Made with ❤️ by Prabhjot Singh</h3>
                    </Col>
                    <Col className='col' >
                        <img id='f-cards' src={require("../img/cards.png")} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer