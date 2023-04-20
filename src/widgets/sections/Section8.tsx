import BgIcon1 from '%/icons/bg-icon-1.svg'
import BgIcon2 from '%/icons/bg-icon-2.svg'
import ChartIcon from '%/icons/chart-icon.svg'
import ItemBlock from '@/components/ItemBlock'

const Section8 = () => {
    return (
        <section className='mt-[143px] flex flex-col items-center gap-y-[43px]'>
            <div className='flex flex-col items-center gap-y-[21px]'>
                <div className='font-inter text-[32px] leading-[48px] text-black'>
                    Доставка стала проще</div>
                <div className='w-[648px] text-center font-inter text-xl leading-8
                    text-gray'
                >
                    Мы позаботимся обо всех ваших различных поставках и их многочисленных
                    специализированных требованиях к разгрузке.
                </div>
            </div>
            <div className='w-full flex justify-between gap-y-[33px] flex-wrap'>
                <ItemBlock
                    iconAside
                    iconBackground={BgIcon1}
                    icon={ChartIcon}
                    title='Бетон'
                    description='Поставки бетона точно планируются, а его состояние контролируется,
                        что обеспечивает максимально возможное время для установки.'
                    iconColorStyle='blue'
                    bgColorStyle='light-blue'
                />
                <ItemBlock
                    iconAside
                    iconBackground={BgIcon1}
                    icon={ChartIcon}
                    title='Утилизация отходов'
                    description='Отходы контролируются и сортируются, а заполненность контейнеров
                        отслеживается в цифровом виде.'
                    iconColorStyle='blue'
                    bgColorStyle='light-blue'
                />
                <ItemBlock
                    iconAside
                    iconBackground={BgIcon2}
                    icon={ChartIcon}
                    title='Опалубка'
                    description='Вся опалубка отслеживается от прибытия до отправления, а ее 
                        состояние контролируется, что сводит к минимуму потери и повреждения.'
                    iconColorStyle='blue'
                    bgColorStyle='light-blue'
                />
                <ItemBlock
                    iconAside
                    iconBackground={BgIcon1}
                    icon={ChartIcon}
                    title='Сборные панели'
                    description='Сборные панели прибывают по очереди, их хранение на месте 
                        отслеживается, а их установка планируется и контролируется.'
                    reverseBg
                />
            </div>
        </section>
    )
}

export default Section8