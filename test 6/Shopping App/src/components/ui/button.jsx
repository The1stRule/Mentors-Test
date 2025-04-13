const Button = ({children, style, ...attributes}) => {
    return (
        <button 
        {...attributes}
        className={`border bg-black text-white py-0.5 rounded-[5px] hover:bg-white 
        hover:text-black duration-300 cursor-pointer text-[14px] ${style}`}>{children}</button>
    );
}

export default Button;