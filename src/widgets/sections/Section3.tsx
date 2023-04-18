import Image from 'next/image'
import Questions from '%/images/section-3-1.png'

export const Section3 = () => {
    return (
        <section className='mt-36 flex flex-col items-center'>
            <h2 className='font-inter text-3xl text-black'>
                Строительство - это хаос
            </h2>
            <div className='mt-4 text-center break-words font-inter text-xl text-gray'>
                Хаос может быть удивительной творческой силой,
                воздвигающая новые здания из пыли.<br />
                Хаос вызывает несчастные случаи, задержки и потери.
                Он вводит проекты в стресс и разочарование.<br />
                Это означает, что вы действительно не контролируете ситуацию.
            </div>
            <Image className='mt-10' src={Questions} alt='Questions'/>
        </section>
    )
}