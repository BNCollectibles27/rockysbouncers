import { useEffect } from "react";
import './InfoCard.css';


function InfoCard(props){
    useEffect(() => {
        const cardList = document.querySelectorAll('.info-card-container');

        for(let i = 0; i < cardList.length; i++){
            // Remove the transition class
            cardList[i].classList.remove('lesserJiggle');

            // Create the observer, same as before:
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        cardList[i].classList.add('lesserJiggle');
                    return;
                    }

                    cardList[i].classList.remove('lesserJiggle');           
                });
            });
            observer.observe(cardList[i]);     
        }
    },[])     

    return(
        <div class={props.class !== undefined ? `${props.class} info-card-container` : "info-card-container"}>
            <div class="info-image-container">
                <img class="info-image" src={props.image} alt={props.alt}/>
            </div>
            <div class="info-text-container">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default InfoCard;