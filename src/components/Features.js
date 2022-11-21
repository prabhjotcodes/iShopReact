import React from 'react'
const { Row, Column } = require('react-flexbox-slim/lib/bundle.umd.js')

function Features() {
    return (
        <div>
            <Row className='tab-row' justifyContent='center'>
                <Column className='tab-col features' xs={12} sm={4} md={6} lg={6} xl={3}>
                    <div className="txtalign">
                        <img  src={require("../img/shipping.png")} />
                        <h2>FREE SHIPPING</h2>
                        <div style={{lineHeight:'24px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        </div>
                    </div>
                </Column>
                <Column className='tab-col features' xs={12} sm={4} md={6} lg={6} xl={3}>
                    <div className="txtalign">
                        <img src={require("../img/refund.png")} />
                        <h2>100% REFUND</h2>
                        <div style={{lineHeight:'24px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        </div>
                    </div>
                </Column>
                <Column className='tab-col features' xs={12} sm={4} md={6} lg={6} xl={3}>
                    <div className="txtalign">
                        <img src={require("../img/support.png")} />
                        <h2>SUPPORT 24/7</h2>
                        <div style={{lineHeight:'24px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        </div>
                    </div>
                </Column>
            </Row>
        </div>
    )
}

export default Features