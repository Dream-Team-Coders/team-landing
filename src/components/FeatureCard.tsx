import Image, { StaticImageData } from 'next/image'

type props = {
    title: string,
    description: string,
    image: StaticImageData,
    isReversed?: boolean
}

const FeatureCard = ({ title, description, image, isReversed }: props) => {
    return (
        <div className={`${isReversed && 'flex-row-reverse'} flex justify-between`}>
            <div className='flex flex-col gap-y-5 justify-center' >
                <div className='font-inter text-black text-[18px] leading-[24px] max-w-[500px]'>
                    {title}
                </div>
                <div className='font-inter text-gray text-[16px] leading-[24px] max-w-[500px]'>
                    {description}
                </div>
            </div>
            <Image src={image} alt='Feature Image' />
        </div>
    )
}

export default FeatureCard