import Button from '@/components/Button'
import City from '%/images/section-1-1.png'
import Image from 'next/image'
import Transport from '%/images/section-1-2.png'

export const Section1 = () => {
    return (
        <section className='w-full flex flex-col items-center justify-center mt-[74px]'>
            <span className='font-inter text-5xl max-w-[820px] text-center'>
                Умная доставка материалов для сложных строительных площадок
            </span>
            <div className='flex flex-row mt-8 gap-x-4'>
                <Button
                    title='Заказать демо'
                    isDark />
                <Button
                    title='Подробнее'
                />
            </div>
            <div className='flex flex-col justify-center'>
                <Image className='mt-20' src={City} alt='City' />
                <Image className='mt-9' src={Transport} alt='Transport' />
            </div>
        </section>
    )
}