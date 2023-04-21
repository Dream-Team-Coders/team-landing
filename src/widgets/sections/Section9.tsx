import Button from '@/components/Button'
import CO2 from '%/icons/co2-green.svg'
import Hands from '%/icons/hands.svg'
import IconBg1 from '@/svgs/IconBg1'
import IconBg2 from '@/svgs/IconBg2'
import Image from 'next/image'
import ItemBlock from '@/components/ItemBlock'
import Leaves from '%/icons/leaves.svg'
import People from '%/icons/people.svg'
import RecyclingGreen from '%/icons/recycling-green.svg'

const Section9 = () => {
    return (
        <section className='mt-[120px] flex flex-col items-center'>
            <div className='font-inter text-[32px] leading-[48px] text-black flex relative'>
                <div className='pt-[18px]'>
                    Надёжность
                </div>
                <Image
                    className='absolute left-[96%]'
                    src={Leaves}
                    alt='Leaves'
                />
            </div>
            <div className='mt-[18px] max-w-[860px] text-center 
                font-inter text-xl leading-8 text-gray'
            >
                Благодаря надёжному строительству выигрывают все - муниципальные органы
                выполняют свои обязанности перед гражданами, инвесторы получают сертификаты
                своих проектов, а генеральные подрядчики получают повышенную репутацию.
            </div>
            <div className='mt-12 w-full flex flex-row gap-x-[33px]'>
                <ItemBlock
                    icon={CO2}
                    iconBackground={<IconBg1 className='fill-light-green' />}
                    title='Сниженное загрязнение'
                    description='При оптимизации логистики требуется меньше поездок, что приводит
                        к снижению выбросов CO2. Выбрасываемый CO2 контролируется,
                        что позволяет ставить цели и вносить ощутимые улучшения.'
                />
                <ItemBlock
                    icon={RecyclingGreen}
                    iconBackground={<IconBg2 className='scale-y-100 fill-light-green' />}
                    title='Улучшенное управление отходами'
                    description='Упрощается сортировка отходов, автоматизируется утилизация отходов,
                        а поврежденные материалы при необходимости используются повторно,
                        что снижает затраты и стимулирует переработку и повторное использование.'
                />
                <ItemBlock
                    icon={People}
                    iconBackground={<IconBg1 className='-scale-x-100 fill-light-green' />}
                    title='Улучшенное влияние на общество'
                    description='Уменьшаются проблемы с дорожным движением и шумовое загрязнение,
                    что улучшает жизнь местного сообщества. Улучшенное обращение с материалами
                    и хранение означает, что рабочие также лучше защищены.'
                />
            </div>
            <div className='w-full mt-[62px] h-[130px] items-center justify-evenly flex flex-row'>
                <Image src={Hands} alt='Hands' />
                <span className='pr-[15px] text-[18px] leading-8 font-inter color-black'>
                    <b>Надёжная конструкция</b> СтройКонтроль входит в стандартную комплектацию.
                </span>
                <Button title='Подробнее' />
            </div>
        </section>
    )
}

export default Section9