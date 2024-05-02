import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeroBanner from './Assets/HeroBanner';
import CalloutBanner from './Assets/CalloutBanner';
import RichText from './Assets/RichText';
import reportWebVitals from './Assets/reportWebVitals';
import Inversion from './Assets/Inversion'
import Split from './Assets/Split';
import OverlapImage from './Assets/OverlapImage';
import FacebookWidget from './Assets/FacebookWidget';
import Carousel from 'react-elastic-carousel';
import ProductCard from './Assets/ProductCard';
import InfoCard from './Assets/InfoCard';
import ProductPopup from './Assets/ProductPopup';
import './Assets/Carousel.css'
//import PDF from './Documents/Giveaway Restrictions.pdf';
import GiveawayButton from './Assets/GiveawayButton';


const root = ReactDOM.createRoot(document.getElementById('root'));

const importAll = (context) => context.keys().map(context);
const imagesContext = require.context('./Image Assets', false, /\.(jpg|jpeg|png)$/);
const images = importAll(imagesContext);

const heroSlides = [
  {
    image: images[17],
    headerText: "",
    bodyText: "",
    primaryBtnText: "View Equipment",
    primaryBtnLink: "#equipment",
    secondaryBtnText: "Reserve Now",
    secondaryBtnLink: "mailto: bncollectibles27@gmail.com?subject=RESERVE a Weekend of Unbeatable FUN!"
  } 
];

const products = {
  "0": {
    image: images[5],
    title: "Rocky's Space Bouncer",
    description: "Step into a realm of nostalgia and boundless joy with Rocky's Space Bouncer! Blast off into a world where imagination knows no limits, and laughter echoes through the cosmos. This inflatable wonder is not just a bounce castle; it's a portal to intergalactic adventures and timeless memories. <br><br> <i>This bounce house has an attached slide and splashing pool for Wet & Dry compatibility.</i>",
    primaryCostLabel: "Weekend(Fri. - Sun.)/Holiday Rentals:",
    secondaryCostLabel: "Weekday Rentals:",
    primaryCost: "$275",
    secondaryCost: "$200",
    dims: "31'L x 13'W x 15'H",
    weight: "295lbs"
  },
  "1": {
    image: images[4],
    title: "Rocky's Circus Bouncer",
    description: "Step right up to the greatest show on Earth with Rocky's Circus Bouncer! Step into the magical world of laughter, awe-inspiring performances, and whimsical wonders that only a circus can bring. Our Circus Bouncer is not just an inflatable; it's a an extreme extravaganza that transforms any event into a spectacle of joy and merriment. <br><br><i>This bounce house has an attached slide and splashing pool for Wet & Dry compatibility.</i>",
    primaryCostLabel: "Weekend(Fri. - Sun.)/Holiday Rentals:",
    secondaryCostLabel: "Weekday Rentals:",
    primaryCost: "$275",
    secondaryCost: "$200",
    dims: "31'L x 13'W x 15'H",
    weight: "295lbs"
  },
  "2": {
    image: images[6],
    title: "Rocky's Sea Slide",
    description: "Dive into a world of aquatic excitement with Rocky's Sea Battle Slide – where the thrill of the high seas meets the joy of sliding! Our Sea Battle Slide isn't just an inflatable slide; it's a nautical adventure that promises a splash of fun for all ages. Get ready to embark on a wet and wild journey that will make waves of memories. <br><br><i>This inflatable slide has an attached splashing pool for Wet & Dry compatibility.</i>",
    primaryCostLabel: "Weekend(Fri. - Sun.)/Holiday Rentals:",
    secondaryCostLabel: "Weekday Rentals:",
    primaryCost: "$365",
    secondaryCost: "$325",
    dims: "36'L x 11'W x 19'H",
    weight: "375lbs"
  },
  "3": {
    image: images[7],
    title: "Rocky's Movie Night",
    description: "Lights, camera, action! Elevate your event to blockbuster status with Rocky's Movie Night – an unforgettable cinematic experience under the stars. Our 20ft movie screen inflatable, paired with movie viewing equipment, isn't just a setup; it's a ticket to a magical night of silver screen enchantment, creating memories that flicker in the hearts of your audience. <br><br> <i>Package includes a 20ft inflatable movie screen, projector, audio, and BluRay player. <b>Movie not included.</b></i>",
    primaryCostLabel: "1-Night Rentals:",
    secondaryCostLabel: "Extended Rentals:",
    primaryCost: "$85",
    secondaryCost: "$120",
    dims: "16.7'L x 6.5'W 11.7'H (20.3' Screen)",
    weight: "26.7lbs"
  },
  "4": {
    image: images[18],
    title: "Rocky's Surf Slide",
    description: "Dive into a world of beachside fun with Rocky's Surf Slide! This thrilling inflatable combines the excitement of surfing with the refreshing splash of water for the ultimate adventure. Perfect for cooling off on hot summer days, this slide brings the beach to your backyard. Get ready to catch some waves and make a splash with Rocky's Surf Slide!<br><br><i>This inflatable slide has an attached splashing pool for Wet & Dry compatibility.</i>",
    primaryCostLabel: "Weekend(Fri. - Sun.)/Holiday Rentals:",
    secondaryCostLabel: "Weekday Rentals:",
    primaryCost: "$365",
    secondaryCost: "$325",
    dims: "27'L x 10'W x 17'H",
    weight: "375lbs"
  },
}

const heroBreaks = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3}
];

const eventBreaks = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 4}
];

//Notes for self:
//git add .
//git commit -m "commit label"
//git push origin
//npm run deploy

root.render(
  <React.StrictMode>
    <div class="nav">
      <img class="logo" src={images[0]} alt="Rocky's Bouncers & Inflatables Logo" />
    </div>
    <div class="nav-spacer"></div>
    <ProductPopup display="">
    </ProductPopup>
    <HeroBanner 
      class="hero1"
      slides={heroSlides}
    />
  
    <CalloutBanner id="equipment" text1="Free Delivery*" text2="Locally Owned" text3="Family Operated"/>
    <GiveawayButton class="hidden"/>
    <RichText header="OUR EQUIPMENT" body="Browse through Rocky's selection of hoppin' inflatables!">
      <p><i>*We offer FREE DELIVERY and SETUP for events in Sioux Falls, Tea, Brandon, & Harrisburg!</i></p>
    </RichText>
    <Carousel breakPoints={heroBreaks} style={{margin: "20px 0px"}}>
      <ProductCard
        image={images[5]}
        title="Rocky's Space Bouncer"
        product={products["0"]}
      />
      <ProductCard
        image={images[4]}
        title="Rocky's Circus Bouncer"
        product={products["1"]}
      />
      <ProductCard
        image={images[6]}
        title="Rocky's Sea Slide (19ft)"
        product={products["2"]}
      />
      <ProductCard
        image={images[18]}
        title="Rocky's Surf Slide (17ft Dual Lane)"
        product={products["4"]}
      />      
      <ProductCard
        image={images[7]}
        title="Rocky's Movie Night"
        product={products["3"]}
      />      
    </Carousel>
    <Inversion>
      <Split leftWidth="50%" rightWidth="50%" >
        <OverlapImage 
          leftImage={images[13]}
          rightImage={images[12]}
        />
        <RichText 
          class="inv1-text" 
          header="PERFECT FOR ANY EVENT" 
          body="Transform any event into the perfect blend of excitement and wholesome fun! Our diverse range of inflatable wonders, featuring bounce castles, inflatable slides, and inflatable
                movie screen packages, guarantees an unforgettable experience for all ages. From our vibrant combo castles to our exhilarating inflatable slides, create a lively atmosphere
                and make lasting experiences with your friends and family. At Rocky's Bouncers & Inflatables, we take pride in helping create these lasting memories. Reserve now and let
                us help you bring joy and fun to any occasion." 
        >
          <div class="btn-container overlap-btn-container">
            <a class="jiggle" href="#equipment"><button class="p-btn jiggle">VIEW EQUIPMENT</button></a>
            <a href="mailto: bncollectibles27@gmail.com?subject=RESERVE a Weekend of Unbeatable FUN!"><button class="p-btn">RESERVE NOW</button></a>
          </div> 
        </RichText>
      </Split>
      <RichText header="EVENTS THAT WE'VE SERVICED"/>
      <Carousel className="inversion-carousel" breakPoints={eventBreaks}>
      <InfoCard
        image={images[8]}
        title="Birthdays"
      />
        <InfoCard
          image={images[9]}
          title="Graduations"
        />
        <InfoCard
          image={images[10]}
          title="Holidays"
        />
        <InfoCard
          image={images[11]}
          title="Family Gatherings"
        />              
      </Carousel>
    </Inversion>
    <Split class="invert-split" leftWidth="50%" rightWidth="50%" >
      <RichText 
          class="inv1-text" 
          header="LOCALLY OWNED & FAMILY OPERATED" 
          body="At Rocky's Bouncers & Inflatables, we take immense pride in being more than just a business – we're a locally owned and family-operated venture that loves our
                community. As a family, we understand the importance of creating wholesome experiences for other families in our community, and that's why we pour our passion
                into every bounce castle and inflatable adventure that we service. Being local means we share in the joys and celebrations of our neighbors, and as a family-operated
                business, we infuse our values of warmth, care, and reliability into every aspect of what we do. When you choose Rocky's Bouncers & Inflatables, you're not selecting
                just entertainment; you're supporting a local dream and becoming a part of our extended family where we create memories together." 
      >
        <div class="btn-container overlap-btn-container">
            <a href="#equipment"><button class="p-btn">VIEW EQUIPMENT</button></a>
            <a href="mailto: bncollectibles27@gmail.com?subject=RESERVE a Weekend of Unbeatable FUN!"><button class="p-btn">RESERVE NOW</button></a>
        </div>      
      </RichText>    
      <OverlapImage 
        class="horizontal-invert"
        leftImage={images[15]}
        rightImage={images[14]}
      />
    </Split>   

    
    <RichText header="OUR TEAM OF BOUNCE EXPERTS" class="hidden"/>

    <div class="hidden">
    <Carousel breakPoints={eventBreaks} class="hidden">
      <InfoCard
        image={images[3]}
        title="Brandon"
      />
      <InfoCard
        image={images[3]}
        title="John"
      />
      <InfoCard
        image={images[3]}
        title="James"
      />
      <InfoCard
        image={images[3]}
        title="Jackson"
      />
      <InfoCard
        image={images[3]}
        title="Mai"
      />      
    </Carousel>
    </div>

    <Inversion>
      <Split
        class="invert-split" 
        leftWidth="500px"
        rightWidth="calc(100% - 500px)"
      >
        <FacebookWidget />
        <RichText 
          class="inv2-text"
          header="JOIN US ON SOCIAL MEDIA!"
          body="Don't miss a beat – follow Rocky's Bouncers & Inflatables on social media! Stay in the know with exciting news, frequent updates, and real reviews. You can message
                us directly on our social media to get an event reserved or send us an email. Find us on Facebook where we post about our special events, deals, and more!"
        >
          <div class="btn-container overlap-btn-container">
              <a href="https://www.facebook.com/rockysbouncers" target="_blank"><button class="p-btn">JOIN US ON FACEBOOK</button></a>
              <a href="https://www.instagram.com/rockysbouncers" target="_blank"><button class="p-btn">JOIN US ON INSTAGRAM</button></a>
          </div>  
        </RichText>
      </Split>
    </Inversion> 
    <div class="footer">
      <h3 id="resources">Additional Resources</h3>
      <p><b>Rocky's Bouncers & Inflatables</b></p>
      <p><b>Email: </b>bncollectibles27@gmail.com</p>
      <p><b>Phone: </b>605-728-8003</p>
      <p class="hidden"><a id="giveaway-link" href = "" target = "_blank">Giveaway Terms & Conditions</a></p>
      <details>
        <summary>Image Attributions</summary>
        <ul>
          <li>
            Birthdays: Photo by <a href="https://unsplash.com/@roshaan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hamid Roshaan</a> on <a href="https://unsplash.com/photos/lighted-candles-on-brown-wooden-table-BQrzI0vi9x0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </li>
          <li>
            Graduations: Photo by <a href="https://unsplash.com/@taiscaptures?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tai's Captures</a> on <a href="https://unsplash.com/photos/woman-holding-purple-mortar-board-wearing-toga-0oa1jhDLevQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </li>
          <li>
            Holiday Events: Photo by <a href="https://unsplash.com/@stephaniemccabe?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Stephanie McCabe</a> on <a href="https://unsplash.com/photos/time-lapse-photography-of-sparkler-and-usa-flag-let-_Ajm-ewEC24?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </li>
          <li>
            Family Gatherings: Photo by <a href="https://unsplash.com/@kendallmscott?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kendall Scott</a> on <a href="https://unsplash.com/photos/grilled-sausage-and-meat-beside-gray-chain-link-fence-c8UEg7VN1Z8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>        
          </li>
        </ul>
      </details>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
