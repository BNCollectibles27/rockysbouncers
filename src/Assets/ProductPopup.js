import './ProductPopup.css';
import RichText from './RichText';
import Split from './Split';

function ProductPopup(props){
    return(
        <div class={props.class !== undefined ? `${props.class} popup-container` : "popup-container"} id="popup-container" style={{display: `${props.display}`}}>
            <div class="modal">
                <div class="close-container">
                    <a href="#"><button class="s-btn close-btn">CLOSE</button></a>
                </div>            
                <Split class="popup-split" leftWidth="50%" rightWidth="50%" >
                    <div class="product-hero-container">
                        <div class="product-hero"></div>
                        <p><i><b>Inflated Dimension of <span class="product-dims">36L x 11W x 19H</span> |</b> Weight: <span class="product-weight"> 375lbs.</span></i></p>
                    </div>
                    <div class="pop-text">
                        <h1 class="pop-title">PERFECT FOR ANY EVENT</h1>
                        <h2 class="pop-price"><b><span class="price-plabel">Weekend(Fri. - Sun.)/Holiday Rentals:</span></b> Starts at <span class="pcost">$275</span></h2>
                        <h2 class="pop-price"><b><span class="price-slabel">Weekday Rentals:</span></b> Starts at <span class="scost">$225</span></h2>
                        <p class="pop-body">Transform any event into the perfect blend of excitement and wholesome fun! Our diverse range of inflatable wonders, featuring bounce castles, inflatable slides, and inflatable
                            movie screen packages, guarantees an unforgettable experience for all ages. From our vibrant combo castles to our exhilarating inflatable slides, create a lively atmosphere
                            and make lasting experiences with your friends and family. At Rocky's Bouncers & Inflatables, we take pride in helping create these lasting memories. Reserve now and let
                            us help you bring joy and fun to any occasion.
                        </p>
                        <div class="btn-container overlap-btn-container">
                            <a class="mailto" href="mailto: bncollectibles27@gmail.com?subject=RESERVE a Weekend of Unbeatable FUN!"><button class="s-btn">EMAIL TO RESERVE</button></a>
                            <p class="call-txt">or call 605-728-8003 to make a reservation.</p>
                            <a class="call-btn" href="tel:+16057288003"><button class="s-btn jiggle">CALL TO RESERVE</button></a>
                        </div>                         
                    </div>
                </Split>
            </div>
        </div>
    )
}

export default ProductPopup;