import React, {useState, useEffect} from 'react';
import './HeroBanner.css';
import RichText from './RichText';

function HeroBanner(props){
    const slides = props.slides;
    const [slideIdx, setSlideIdx] = useState(0);
    const [selectedSlide, setSelectedSlide] = useState(slides[0]); // initial 0 slide
    const imageStyle = {
        backgroundImage: `url(${selectedSlide.image})`
    } 

    useEffect(() => {
        setSelectedSlide(slides[slideIdx]);
        const slideList = document.querySelectorAll('.slide');

        for(let i = 0; i < slideList.length; i++){
            // Remove the transition class
            slideList[i].classList.remove('fadeOutIn');

            // Create the observer, same as before:
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        slideList[i].classList.add('fadeOutIn');
                    return;
                    }

                    slideList[i].classList.remove('fadeOutIn');           
                });
            });
            observer.observe(slideList[i]);     
        }       
    }, [slides, slideIdx]);

    const nextImage = () =>{
        if(slideIdx >= slides.length-1){
            setSlideIdx(0);
        }else{
            setSlideIdx((prevSlideIdx) => prevSlideIdx + 1);
        }
        setSelectedSlide(slides[slideIdx]);
    }

    const prevImage = () =>{
        if(slideIdx <= 0){
            setSlideIdx(slides.length-1);
        }else{
            setSlideIdx((prevSlideIdx) => prevSlideIdx - 1);
        }
        setSelectedSlide(slides[slideIdx]);
    }

    return(
        <div class={props.class !== undefined ? `${props.class} hero-banner` : "hero-banner"}>      
            <button class="prev" onClick={prevImage}>&lt;</button>
            <button class="next" onClick={nextImage}>&gt;</button>   
            <div class="slide" style={imageStyle} >
            {(selectedSlide.headerText || selectedSlide.bodyText) && <RichText header={selectedSlide.headerText} body={selectedSlide.bodyText} />}
                
                <div class="btn-container">
                    <a href={`${selectedSlide.primaryBtnLink}`}><button class="p-btn primary-btn">{selectedSlide.primaryBtnText}</button></a>
                    <a href={`${selectedSlide.secondaryBtnLink}`}><button class="p-btn secondary-btn">{selectedSlide.secondaryBtnText}</button></a>
                </div>            
            </div>                
        </div>
    )
}

export default HeroBanner;