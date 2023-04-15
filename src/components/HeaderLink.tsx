type props = {
  title?: string
  href?: string
  isActive?: boolean
};

const HeaderLink = ({title, href, isActive}: props) => {
    return (
      <button className={`text-base ${isActive && 'text-links-blue'}`}>
        {title}
      </button>
    )
}

export default HeaderLink