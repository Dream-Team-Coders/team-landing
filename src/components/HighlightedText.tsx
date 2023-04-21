type props = {
    children: string
    className?: string
}

const HighlightedText = ({ children, className }: props) => {
    return (
        <div className='relative inline-block'>
            <div className={`inline-block ${className}`}>
                {children}
            </div>
            <div className='absolute -z-10 top-1/2 left-0 w-full h-1/2 bg-mustard' />
        </div>
    )
}

export default HighlightedText