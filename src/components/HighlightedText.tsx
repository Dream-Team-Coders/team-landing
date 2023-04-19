type props = {
    children: string
}

const HighlightedText = ({ children }: props) => {
    return (
        <div className='relative inline-block'>
            <div className='inline-block font-inter text-xl leading-8 text-black'>
                {children}
            </div>
            <div className='absolute -z-10 top-1/2 left-0 w-full h-1/2 bg-mustard' />
        </div>
    )
}

export default HighlightedText