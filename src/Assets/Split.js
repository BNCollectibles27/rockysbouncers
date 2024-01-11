import React from 'react';
import "./Split.css"

function Split(props){
    return(
        <div class={props.class != undefined ? `${props.class} split-container` : "split-container"}>
            <div 
                class="left-column" 
                style={{
                    width: `${props.leftWidth}`
                }}
            >
                {React.Children.toArray(props.children)[0]}
            </div>
            <div
                class="right-column"
                style={{
                    width: `${props.rightWidth}`
                }}
            >
                {React.Children.toArray(props.children)[1]}
            </div>
        </div>
    )            
}

export default Split;