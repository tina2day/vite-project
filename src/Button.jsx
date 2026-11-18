function Button({children, onClick, className}) {
    return (
        <button className={className} type='button' onClick={onClick}>{children}</button>
    )
}
export default Button