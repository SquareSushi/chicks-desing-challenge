function Button (props:any) {
    return (
        <button className={props.className} onClick={props.onClick}>
        {props.children}
        </button>
    )
}

export default Button;