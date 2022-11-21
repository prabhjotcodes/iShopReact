import React from 'react'
import logo from '../logo.svg';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
const { Row, Column } = require('react-flexbox-slim/lib/bundle.umd.js')

function Navbar() {

    return (

        <div>
            <div id='nav_1'>
                <div id='nav_1-l'>
                    <span id='nav-drop-1'>EN<i class="fa-solid fa-sort-down"></i>
                        <span >
                            <div id='drop-1' className='dropdown'>
                                <a>PUN</a>
                                <a>HIN</a>
                            </div>
                        </span>
                    </span>
                    <span id='nav-drop-2'>$<i class="fa-solid fa-sort-down"></i>
                        <span >
                            {/* <div id='drop-2' className='dropdown2'>
                                <a>AUD</a>
                                <a>CAD</a>
                            </div> */}
                        </span>
                    </span>

                </div>
                <div id='nav_1-r'>
                <i class="fa-solid fa-user"></i><span >My profile</span>
                <i class="fa-solid fa-basket-shopping"></i><span >My cart</span>
                <i class="fa-solid fa-magnifying-glass"></i><span >Search</span>
                </div>
            </div>

            <div id='nav_2'>
                <div id='navlogo'>
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div id='navbar'>

                    <NavigationMenu.Root className="NavigationMenuRoot" >
                        <NavigationMenu.List className="NavigationMenuList">

                            <NavigationMenu.Item>
                                <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                                    <span>HOME</span>
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                    <span>STORE</span>
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content className="NavigationMenuContent">
                                    <ul className="List two">
                                        <Row className='tab-row nav-content' justifyContent='left'>
                                            <Column className='tab-col' xs={12} sm={4} md={6} lg={6} xl={3}>
                                                <h3>Categories</h3>
                                                <a>Charging Devices</a>
                                                <a>Connected Home</a>
                                                <a>Device Care</a>
                                                <a>Display & Graphic</a>
                                                <a>Fitness & Sport</a>
                                            </Column>
                                            <Column style={{ margin: '57px' }} className='tab-col'>
                                                <a>Headphones</a>
                                                <a>HealthKit</a>
                                            </Column>
                                        </Row>
                                    </ul>
                                </NavigationMenu.Content>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                    <span>IPHONE</span>
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content className="NavigationMenuContent">
                                    <ul className="List two">
                                        <Row className='tab-row nav-content' justifyContent='left'>
                                            <Column className='tab-col' xs={12} sm={4} md={6} lg={6} xl={3}>
                                                <h3>iPhones</h3>
                                                <a>iPhone 14 Pro</a>
                                                <a>iPhone 14 Pro Max</a>
                                                <a>iPhone 13</a>
                                                <a>iPhone 10</a>
                                            </Column>
                                        </Row>
                                    </ul>
                                </NavigationMenu.Content>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                    <span>IPAD</span>
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content className="NavigationMenuContent">
                                    <ul className="List two">
                                        <Row className='tab-row nav-content' justifyContent='left'>
                                            <Column className='tab-col' xs={12} sm={4} md={6} lg={6} xl={3}>
                                                <h3>iPads</h3>
                                                <a>Apple iPad Pro ( 6th generation )</a>
                                                <a>Apple iPad Air ( 5th generation )</a>
                                                <a>Apple iPad Mini</a>
                                            </Column>
                                        </Row>
                                    </ul>
                                </NavigationMenu.Content>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                    <span>MACKBOOK</span>
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content className="NavigationMenuContent">
                                    <ul className="List two">
                                        <Row className='tab-row nav-content' justifyContent='left'>
                                            <Column className='tab-col' xs={12} sm={4} md={6} lg={6} xl={3}>
                                                <h3>Macbooks</h3>
                                                <a>Macbook Pro 16</a>
                                                <a>Macbook Pro 14</a>
                                                <a>Macbook Pro 13</a>
                                            </Column>
                                            <Column style={{ margin: '57px' }} className='tab-col'>
                                                <a>Macbook Air ( M1 )</a>
                                                <a>Macbook Air ( M2 )</a>
                                            </Column>
                                        </Row>
                                    </ul>
                                </NavigationMenu.Content>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                    <span>ACCESORIES</span>
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content className="NavigationMenuContent">
                                    <ul className="List two">
                                        <Row className='tab-row nav-content' justifyContent='left'>
                                            <Column className='tab-col' xs={12} sm={4} md={6} lg={6} xl={3}>
                                                <h3>Accessories</h3>
                                                <a>AirPord & Wireless</a>
                                                <a>iPhones</a>
                                                <a>AppleCare</a>
                                                <a>Bags, Shells & Sleeves</a>
                                                <a>Business & Security</a>
                                            </Column>
                                            <Column style={{ margin: '57px' }} className='tab-col'>
                                                <a>Cameras & Video</a>
                                                <a>Cables & Docks</a>
                                                <a>Car & Travel</a>
                                                <a>Cases & Films</a>
                                            </Column>

                                        </Row>
                                    </ul>
                                </NavigationMenu.Content>
                            </NavigationMenu.Item>



                            <NavigationMenu.Indicator className="NavigationMenuIndicator">
                                <div className="Arrow" />
                            </NavigationMenu.Indicator>
                        </NavigationMenu.List>

                        <div className="ViewportPosition">
                            <NavigationMenu.Viewport className="NavigationMenuViewport" />
                        </div>
                    </NavigationMenu.Root>



                </div>
            </div>

        </div>



    )
}

export default Navbar;