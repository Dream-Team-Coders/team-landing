import { ReactElement } from 'react'
import SvgProps from '@/types/SvgProps'
import Image, { StaticImageData } from 'next/image'

type props = {
    icon: StaticImageData
    iconBackground: ReactElement<SvgProps>
    title: string
    description: string
    titleStyle?: string
    descriptionStyle?: string
    iconAside?: boolean
};

const ItemBlock = ({
    icon,
    iconBackground,
    title,
    description,
    titleStyle = 'text-black',
    descriptionStyle = 'text-gray',
    iconAside = false }: props) => {
    return (
        <div className={`flex justify-start gap-y-[20px] gap-x-[16px]
            ${!iconAside ?
            'flex-col w-[325px] items-center' :
            'w-[334px] gap-x-[16px]'}`}
        >
            <div className='relative h-12 w-12 overflow-hidden'>
                {iconBackground}
                <Image
                    className='absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2'
                    src={icon}
                    alt='icon' />
            </div>
            <div className={`flex flex-col justify-start items-center gap-y-[10px] text-center
                ${iconAside && 'w-[270px] text-start'}`}
            >
                <div className={`w-full break-words font-inter text-lg ${titleStyle}`}>
                    {title}
                </div>
                <div className={`w-full break-words font-inter text-base ${descriptionStyle}`}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ItemBlock
