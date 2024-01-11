import { useEffect } from "react";
import './ProductCard.css';


function ProductCard(props){
    useEffect(() => {
        const cardList = document.querySelectorAll('.product-card-container');

        for(let i = 0; i < cardList.length; i++){
            // Remove the transition class
            cardList[i].classList.remove('dropFade');

            // Create the observer, same as before:
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        cardList[i].classList.add('dropFade');
                    return;
                    }

                    cardList[i].classList.remove('dropFade');           
                });
            });
            observer.observe(cardList[i]);     
        }
    },[])    

    return(
        <div class={props.class !== undefined ? `${props.class} product-card-container` : "product-card-container"}>
            <div class="product-image-container">
                <img class="product-image" src={props.image} alt={props.alt} />
            </div>
            <div class="product-text-container">
                <h2>{props.title}</h2>
                <a href="#popup-container"><button class="p-btn product-btn">VIEW PRODUCT</button></a>
            </div>
        </div>
    )
}

export default ProductCard;