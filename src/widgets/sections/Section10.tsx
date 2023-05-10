import BackgroundImage from '%/images/section-10-1.png'
import Button from '@/components/Button'
import GradCapIcon from '%/icons/grad-cap.svg'
import IconBg1 from '@/svgs/IconBg1'
import IconBg2 from '@/svgs/IconBg2'
import Image from 'next/image'
import ItemBlock from '@/components/ItemBlock'
import ListItem from '@/components/ListItem'
import MatchingIcon from '%/icons/matching.svg'
import SuppliersIcon from '%/icons/suppliers.svg'

const Section10 = () => {
    return (
        <section className='w-full py-36 flex flex-col 
            justify-center items-center gap-y-[127px]'>
            <div className='w-full flex justify-start items-start gap-x-[53px]'>
                <div className='w-[590px] flex flex-col justify-center items-start gap-y-[50px]'>
                    <div className='font-inter text-[32px] leading-[48px] text-white'>
                        Создан для строительства
                    </div>
                    <div className='flex flex-col justify-center items-start gap-y-[24px]'>
                        <ListItem>
                            <div className='font-inter text-[18px] leading-[24px] text-white'>
                                Хорошо виден в любых условиях
                                <div className='text-base text-white-a-0.75 pt-[10px]'>
                                    Независимо от того, солнечно или темно, найдется <br />
                                    подходящий режим экрана
                                </div>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className='font-inter text-[18px] leading-[24px] text-white'>
                                Поддержка международных языков
                                <div className='text-base text-white-a-0.75 pt-[10px]'>
                                    На современной стройке работают люди со всего мира.
                                    Язык не <br /> является проблемой для СтройКонтроля
                                </div>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div className='font-inter text-[18px] leading-[24px] text-white'>
                                Работает на любом устройстве - мобильном телефоне, планшете,
                                ноутбуке
                                <div className='text-base text-white-a-0.75 pt-[10px]'>
                                    Люди на разных должностях используют разные устройства. <br />
                                    СтройКонтроль автоматически настраивается в соответствии
                                    с <br /> требованиями. Вы также можете проецировать
                                    панели мониторинга <br /> живого проекта на настенные экраны.
                                </div>
                            </div>
                        </ListItem>
                    </div>
                    <div className='flex justify-start items-center gap-x-[16px]'>
                        <Button title='Заказать демо'
                            style='text-[18px] px-[25px] py-[12px] text-[18px] font-inter' />
                        <Button title='Подробнее'
                            style='text-[18px] px-[25px] py-[12px] font-inter'
                            isDark />
                    </div>
                </div>
                <div className='relative'>
                    <Image className='max-w-none block absolute w-[618px] h-[493px] top-0 left-0'
                        src={BackgroundImage} alt='Bg' />
                </div>
            </div>
            <div className='w-full flex justify-center items-start gap-x-[18px]'>
                <ItemBlock
                    iconBackground={<IconBg1 className='-scale-x-100' />}
                    icon={GradCapIcon}
                    title='Привлечение субподрядчика'
                    description='Для выполнения этой работы вам понадобятся ваши субподрядчики.
                        У нас есть проверенный и надежный процесс для этого.'
                    titleStyle='text-white'
                    descriptionStyle='text-white-a-0.75'
                />
                <ItemBlock
                    iconBackground={<IconBg2 />}
                    icon={SuppliersIcon}
                    title='Привлечены ключевые поставщики'
                    description='У нас уже есть ключевые поставщики, использующие программное 
                        обеспечение, что обеспечивает еще больший контроль и прозрачность 
                        информации.'
                    titleStyle='text-white'
                    descriptionStyle='text-white-a-0.75'
                />
                <ItemBlock
                    iconBackground={<IconBg1 />}
                    icon={MatchingIcon}
                    title='100% соответствие'
                    description='У нас есть безупречный список обеспечения соответствия 
                        требованиям, которые необходимы вам для успешного выполнения 
                        проекта с помощью СтройКонтроль.'
                    titleStyle='text-white'
                    descriptionStyle='text-white-a-0.75'
                />
            </div>
        </section>
    )
}

export default Section10