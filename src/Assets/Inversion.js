
function Inversion(props){
    return(
        <div class={props.class != undefined ? `${props.class} inversion` : "inversion"} style={{
            backgroundColor: "rgb(134, 223, 250)"
        }}>
            {props.children}
        </div>
    )
}

export default Inversion;