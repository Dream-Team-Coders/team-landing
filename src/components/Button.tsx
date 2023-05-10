type props = {
    title?: string
    style?: string
    isDark?: boolean
};

const Button = ({ title, style, isDark }: props) => {
    return (
        <button className={`w-fit h-fit rounded border-[1px] border-btns-light
            ${style
            ? style
            : 'text-base py-2 px-5'} 
            ${isDark
            ? 'bg-btns-dark text-white'
            : 'bg-white border'}`}
        >
            {title}
        </button>
    )
}

export default Button