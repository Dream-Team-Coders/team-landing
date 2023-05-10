type props = {
    children: React.ReactNode
}

const ListItem = ({ children }: props) => {
    return (
        <div className='flex flex-row justify-between items-start gap-x-[32px]
            before:block before:content-[""] before:bg-white
            before:mt-2 before:w-2 before:h-2 before:bg-w before:rounded-lg'
        >
            {children}
        </div>
    )
}

export default ListItem
