import React from 'react'

function Product(props) {
  return (
    <div>
        <div className="product-head">
            <img src={props.altimgUrl} alt="" />
        </div>
        <div className="product-body">
            <h2 className="name">{props.name}</h2>
            <p className="rating">{props.rating}</p>
            <p className="prices">{props.prices}</p>
        </div>
    </div>
  )
}

export default Product