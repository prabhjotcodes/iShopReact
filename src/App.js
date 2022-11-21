
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-tabs/style/react-tabs.css';
import Navbar from './components/Navbar';
import ProductTabs from "./components/ProductTabs";
import Features from "./components/Features";
import FeaturedProds from "./components/FeaturedProds";
import Footer from "./components/Footer";

function App() {
  return (

    <div>
      
      <Navbar />
      
      <Carousel className='carousel' showArrows={false} showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay={true} showThumbs={false} stopOnHover={false}>
        <div>
          <img src={require("./img/corousel_1.png")} />

        </div>
        <div>
          <img src={require("./img/corousel_2.png")} />

        </div>
        <div>
          <img src={require("./img/corousel_3.png")} />

        </div>
      </Carousel>

      <div id='best-seller' className='txtalign'>
        <h1>BEST SELLERS</h1>
        <ProductTabs />
        <div>
          <h3 style={{ color: '#33A0FF', borderBottom: '4px solid #33A0FF', padding: '10px 0', display: 'inline-block', cursor: 'pointer' }}>LOAD MORE</h3>
        </div>
      </div>

      <div>
        <img id="iphone-banner" src={require("./img/iphone-banner.png")} />
      </div>

      <div>
        <Features />
      </div>

      <div id="featured-prods" >
        <h1 className="txtalign">FEATURED PRODUCTS</h1>
        <div>
          <FeaturedProds />
        </div>
      </div>

      <Footer />








    </div>

  );
}

export default App;
