import ReactStars from "react-rating-stars-component";
import React from 'react'
const { Row, Column } = require('react-flexbox-slim/lib/bundle.umd.js')

function mac() {
  return (
    <div>

      <Row className='tab-row' justifyContent='center'>
        <Column className='tab-col' xs={12} sm={4} md={6} lg={6} xl={3}>
          <p className='cards'>
            <img src={require("../../img/products/prod1.png")} />
            <h5>Apple Macbook Pro</h5>
            <div className='rating'>
              <ReactStars
                count={5}
                size={24}
                value={4.5}
                isHalf={true}
                emptyIcon={<i className="fa-regular fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa-solid fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <h5>
              <span style={{ color: '#FF4858', marginRight: '10px' }}>$499</span>
              <span style={{ color: '#C1C8CE', textDecoration: 'line-through' }}>$599</span>
            </h5>
          </p>
        </Column>
        <Column className='tab-col' xs={12} sm={4} md={6} lg={6} xl={3}>
          <p className='cards'>
            <img src={require("../../img/products/prod1.png")} />
            <h5>Apple Macbook Pro</h5>
            <div className='rating'>
              <ReactStars
                count={5}
                size={24}
                value={4.5}
                isHalf={true}
                emptyIcon={<i className="fa-regular fa-star"></i>}
                halfIcon={<i className="fa-solid fa-star-half"></i>}
                fullIcon={<i className="fa-solid fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <h5>
              <span style={{ color: '#FF4858', marginRight: '10px' }}>$499</span>
              <span style={{ color: '#C1C8CE', textDecoration: 'line-through' }}>$599</span>
            </h5>
          </p>
        </Column>
        <Column className='tab-col' xs={12} sm={4} md={6} lg={6} xl={3}>
          <p className='cards'>
            <img src={require("../../img/products/prod2.png")} />
            <h5>Apple Macbook Air</h5>
            <div className='rating'>
              <ReactStars
                count={5}
                size={24}
                value={4.5}
                isHalf={true}
                emptyIcon={<i className="fa-regular fa-star"></i>}
                halfIcon={<i className="fa-solid fa-star-half"></i>}
                fullIcon={<i className="fa-solid fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <h5>
              <span style={{ color: '#FF4858', marginRight: '10px' }}>$499</span>
              <span style={{ color: '#C1C8CE', textDecoration: 'line-through' }}>$599</span>
            </h5>
          </p>
        </Column>
      </Row>

    </div>
  )
}

export default mac