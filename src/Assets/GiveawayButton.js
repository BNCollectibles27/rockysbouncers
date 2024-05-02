import './GiveawayButton.css';


function GiveawayButton(props){
    return(
        <div class={props.class !== undefined ? `${props.class} giveaway-container` : "giveaway-container"} id="giveaway-container">
            <a href="https://www.facebook.com/rockysbouncers" target="_blank"><button class="g-btn">Join our Giveaway</button></a>
        </div>
    )
}

export default GiveawayButton;