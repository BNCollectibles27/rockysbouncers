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

    function updatedProduct(){      
        let productImage = document.querySelector(".product-hero");
        productImage.style.backgroundImage = "url('" + props.product["image"] + "')";

        let productTitle = document.querySelector(".pop-title");
        productTitle.innerHTML = props.product["title"];

        let productDims  = document.querySelector(".product-dims");
        productDims.innerHTML = props.product["dims"];

        let productWeight  = document.querySelector(".product-weight");
        productWeight.innerHTML = props.product["weight"];        

        let pLabel = document.querySelector(".price-plabel");
        pLabel.innerHTML = props.product["primaryCostLabel"];

        let pCost = document.querySelector(".pcost");
        pCost.innerHTML = props.product["primaryCost"];        

        let sLabel = document.querySelector(".price-slabel");
        sLabel.innerHTML = props.product["secondaryCostLabel"];        

        let sCost = document.querySelector(".scost");
        sCost.innerHTML = props.product["secondaryCost"];                

        let body = document.querySelector(".pop-body");
        body.innerHTML = props.product["description"];         

        let mailto = document.querySelector(".mailto");
        mailto.setAttribute("href", "mailto: bncollectibles27@gmail.com?subject=RESERVE a Weekend of Unbeatable FUN! (" + props.product["title"] + ")");        
    }

    return(
        <div class={props.class !== undefined ? `${props.class} product-card-container` : "product-card-container"}>
            <div class="product-image-container">
                <img class="product-image" src={props.image} alt={props.alt} />
            </div>
            <div class="product-text-container">
                <h2>{props.title}</h2>
                <a href="#popup-container"><button class="p-btn product-btn" onClick={updatedProduct}>VIEW PRODUCT</button></a>
            </div>
        </div>
    )
}

export default ProductCard;