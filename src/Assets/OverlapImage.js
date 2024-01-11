
import { useEffect } from "react";
import "./OverlapImage.css";

function OverlapImage(props){
    useEffect(() => {
        const overlapList = document.querySelectorAll('.image-overlap-container');
        const backImgList = document.querySelectorAll('.back-image');
        const frontImgList = document.querySelectorAll('.front-image');
        const shadowList1 = document.querySelectorAll('.image-shadow-1');
        const shadowList2 = document.querySelectorAll('.image-shadow-2');

        for(let i = 0; i < overlapList.length; i++){
            // Remove the transition class
            backImgList[i].classList.remove('dropInBack');
            frontImgList[i].classList.remove('dropInFront');        
            shadowList1[i].classList.remove('fadeIn');
            shadowList2[i].classList.remove('fadeIn');

            // Create the observer, same as before:
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        backImgList[i].classList.add('dropInBack');
                        frontImgList[i].classList.add('dropInFront');
                        shadowList1[i].classList.add('fadeIn');
                        shadowList2[i].classList.add('fadeIn');
                    return;
                    }

                    backImgList[i].classList.remove('dropInBack');
                    frontImgList[i].classList.remove('dropInFront');
                    shadowList1[i].classList.remove('fadeIn');
                    shadowList2[i].classList.remove('fadeIn');                
                });
            });
            observer.observe(overlapList[i]);     
        }


        overlapList.forEach(function(element){
     
        });
    })     
 

    return(
        <div class={props.class != undefined ? `${props.class} image-overlap-container` : "image-overlap-container"}>
            <div class="back-image" style={{
                backgroundImage: `url(${props.leftImage})`
            }}></div>
            <div class="front-image" style={{
                backgroundImage: `url(${props.rightImage})`
            }}></div>
            <div class="image-shadow-1"></div>
            <div class="image-shadow-2"></div>
        </div>
    )
};

export default OverlapImage;