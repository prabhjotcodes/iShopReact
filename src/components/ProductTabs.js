import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import All from './pcategories/All';
import Mac from './pcategories/Mac';
import Iphone from './pcategories/Iphone';
import Ipad from './pcategories/Ipad';
import Ipod from './pcategories/Ipod';
import Accesories from './pcategories/Accesories';




function ProductTabs() {
  return (
    <div>
      <Tabs id='tabs' className='txtalign'>
        <TabList className='txtalign' id='seller-bar'>
              <Tab>All</Tab>
              <Tab>Mac</Tab>
              <Tab>iPhone</Tab>
              <Tab>iPad</Tab>
              <Tab>iPod</Tab>
              <Tab>Accesories</Tab>
        </TabList>

        <TabPanel>
          <h2>
            <All/>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2><Mac/></h2>
        </TabPanel>
        <TabPanel>
          <h2><Iphone/></h2>
        </TabPanel>
        <TabPanel>
          <h2><Ipad/></h2>
        </TabPanel>
        <TabPanel>
          <h2><Ipod/></h2>
        </TabPanel>
        <TabPanel>
          <h2><Accesories/></h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default ProductTabs