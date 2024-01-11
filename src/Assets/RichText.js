import './RichText.css'

function RichText(props){
    return(
        <div 
            class={props.class !== undefined ? `${props.class} text-container` : "text-container"}
            id={props.id !== undefined ? `${props.id}` : ""}
        >
            <h1 class="rich-h1">
                {props.header}
            </h1>
            <p  class="rich-p">
                {props.body}
            </p>
            {props.children}
        </div>
    )
}

export default RichText;