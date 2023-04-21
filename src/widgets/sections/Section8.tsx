import BulldozerIcon from '%/icons/bulldozer.svg'
import FacadeIcon from '%/icons/facade.svg'
import FormworkIcon from '%/icons/formwork.svg'
import HighlightedText from '@/components/HighlightedText'
import IconBg1 from '@/svgs/IconBg1'
import IconBg2 from '@/svgs/IconBg2'
import ItemBlock from '@/components/ItemBlock'
import PaintrollerIcon from '%/icons/paintroller.svg'
import PanelsIcon from '%/icons/panels.svg'
import PipeIcon from '%/icons/pipe.svg'
import ScaffoldIcon from '%/icons/scaffold.svg'
import TrashbinIcon from '%/icons/trashbin.svg'
import TruckIcon from '%/icons/truck.svg'

const Section8 = () => {
    return (
        <section className='mt-[143px] flex flex-col items-center gap-y-[22px]'>
            <div className='flex flex-col items-center gap-y-[21px]'>
                <div className='font-inter text-[32px] leading-[48px] text-black'>
                    Доставка стала проще
                </div>
                <div className='w-[648px] text-center font-inter text-xl leading-8 text-gray'>
                    Мы позаботимся обо всех ваших различных поставках и их многочисленных
                    специализированных требованиях к разгрузке.
                </div>
            </div>
            <div className='mt-[21px] w-full flex justify-between gap-y-[33px] flex-wrap'>
                <ItemBlock
                    iconAside
                    iconBackground={<IconBg1 className='fill-light-blue' />}
                    icon={TruckIcon}
                    title='Бетон'
                    description='Поставки бетона точно планируются, а его состояние контролируется,
                        что обеспечивает максимально возможное время для установки.'
                />
                <ItemBlock
                    iconAside
                    iconBackground={<IconBg1 className='fill-light-blue -scale-x-100' />}
                    icon={TrashbinIcon}
                    title='Утилизация отходов'
                    description='Отходы контролируются и сортируются, а заполненность контейнеров
                        отслеживается в цифровом виде.'
                />
                <ItemBlock
                    iconAside
                    iconBackground={<IconBg2 className='fill-light-blue' />}
                    icon={FormworkIcon}
                    title='Опалубка'
                    description='Вся опалубка отслеживается от прибытия до отправления, а ее 
                        состояние контролируется, что сводит к минимуму потери и повреждения.'
                />
                <ItemBlock
                    iconAside
                    iconBackground={<IconBg1 className='fill-light-blue' />}
                    icon={PanelsIcon}
                    title='Сборные панели'
                    description='Сборные панели прибывают по очереди, их хранение на месте 
                        отслеживается, а их установка планируется и контролируется.'
                />
                <ItemBlock
                    iconAside
                    iconBackground={<IconBg1 className='fill-light-blue' />}
                    icon={FacadeIcon}
                    title='Фасады'
                    description='Элементы фасада поступают последовательно, их сборка 
                        контролируется, а перемещение отслеживается.'
                />
                <ItemBlock
                    iconAside
                    iconBackground={<IconBg1 className='fill-light-blue -scale-x-100' />}
                    icon={PaintrollerIcon}
                    title='Отделка'
                    description='Материалы поступают точно в срок, маркируются и детально 
                        отслеживаются для установки.'
                />
                <ItemBlock
                    iconAside
                    iconBackground={<IconBg1 className='fill-light-blue' />}
                    icon={ScaffoldIcon}
                    title='Строительные леса'
                    description='Строительные леса отслеживаются от получения до хранения,
                        использования и возврата, поэтому всегда ясно, что на месте и где.'
                />
                <ItemBlock
                    iconAside
                    iconBackground={<IconBg2 className='fill-light-blue' />}
                    icon={BulldozerIcon}
                    title='Оборудование'
                    description='Оборудование и операторы гарантированно доступны в случае 
                        необходимости, а их рабочее состояние отслеживается.'
                />
                <ItemBlock
                    iconAside
                    iconBackground={<IconBg1 className='fill-light-blue -scale-x-100' />}
                    icon={PipeIcon}
                    title='Электрика и сантехника'
                    description='Доставка осуществляется в точной последовательности для сложной
                        установки, что сокращает или устраняет необходимость в хранении.'
                />
            </div>
            <div className='font-inter text-xl leading-8 text-gray'>
                ...&nbsp;
                <HighlightedText className='text-black'>
                    и все остальные материалы,
                </HighlightedText> которые поступают или покидают вашу площадку
            </div>
        </section>
    )
}

export default Section8