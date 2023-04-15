import Image, { StaticImageData } from 'next/image'

type props = {
    iconBackground: StaticImageData
    icon: StaticImageData
    title: string
    description: string
    reverseBg?: boolean
};

const ItemBlock = ({ iconBackground, icon, title, description, reverseBg = false }: props) => {
    return (
        <div className='flex flex-col justify-start items-center gap-y-[20px] w-[325px]'>
            <div className='relative h-12 w-12 overflow-hidden'>
                <Image
                    className={`${reverseBg &&
                        '-scale-x-100'}`}
                    src={iconBackground}
                    alt='icon-bg' />
                <Image
                    className='absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2'
                    src={icon}
                    alt='icon' />
            </div>
            <div className='flex flex-col justify-start items-center gap-y-[10px]'>
                <div className='text-center text-lg text-black'>
                    {title}
                </div>
                <div className='text-center break-words font-inter text-base text-gray'>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ItemBlock
