type props = {
  title?: string
  isDark?: boolean
};

const Button = ({title, isDark}: props) => {
    return (
      <button className={`w-fit h-fit text-base py-2 px-5 rounded ${isDark ? 'bg-btns-dark text-white' : 'border border-btns-light'}`}>
        {title}
      </button>
    )
}

export default Button