type props = {
  title?: string
  href?: string
  isActive?: boolean
};

const HeaderLink = ({ title, isActive }: props) => {
    return (
        <button className={`font-inter text-base ${isActive && 'text-links-blue'}`}>
            {title}
        </button>
    )
}

export default HeaderLink