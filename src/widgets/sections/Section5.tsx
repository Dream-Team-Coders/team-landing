import HighlightedText from '@/components/HighlightedText'
import Image from 'next/image'
import Pic1 from '%/images/section-5-1.png'

const Section5 = () => {
    return (
        <section className='mt-[168px] flex'>
            <div className='flex flex-col items-start w-[542px] gap-y-4'>
                <div className='font-inter text-[32px] leading-[48px] text-black'>
                    Мы заботимся о доставке на стройплощадку и о людях, которые на них рассчитывают
                </div>
                <div className='font-inter text-xl leading-8 text-gray'>
                    Мы знаем всё о гордости от сияющего нового здания. Нам также известно всё о
                    разочаровании от попыток завершить проект в срок и в рамках бюджета.
                </div>
                <HighlightedText>Мы здесь, чтобы помочь.</HighlightedText>
            </div>
            <Image className='block h-[400px]' src={Pic1} alt='Picture'/>
        </section>
    )
}

export default Section5