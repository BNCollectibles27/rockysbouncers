import './CalloutBanner.css'

function CalloutBanner(props){
    return(
        <div 
            class={props.class !== undefined ? `${props.class} callout-banner` : "callout-banner"} 
            id={props.id !== undefined ? `${props.id}` : ""}
        >
            <p class="callout item-1"><b>{props.text1}</b></p>
            <p class="callout item-2"><b>{props.text2}</b></p>
            <p class="callout item-3"><b>{props.text3}</b></p>
        </div>
    )
}

export default CalloutBanner;