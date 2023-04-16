import BgIcon1 from '../../public/icons/bg-icon-1.svg'
import BgIcon2 from '../../public/icons/bg-icon-2.svg'
import Button from '@/components/Button'
import ChartIcon from '../../public/icons/chart-icon.svg'
import HardhatIcon from '../../public/icons/hardhat-icon.svg'
import ItemBlock from '@/components/ItemBlock'
import MainLayout from '@/layouts/MainLayout'
import RecyclingIcon from '../../public/icons/recycling-icon.svg'

export default function Home() {
    return (
        <main className='flex flex-col items-center'>
            <MainLayout>
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
                </section>
                <section className='w-full flex justify-between'>
                    <ItemBlock
                        iconBackground={BgIcon1}
                        icon={ChartIcon}
                        title='Повышение эффективности'
                        description='Эффективные проекты стоят дешевле и завершаются в срок.'
                    />
                    <ItemBlock
                        iconBackground={BgIcon2}
                        icon={RecyclingIcon}
                        title='Снижение потерь'
                        description='Тщательно отслеживайте движение стройматериалов,
                            чтобы избежать краж и повреждений.'
                    />
                    <ItemBlock
                        iconBackground={BgIcon1}
                        icon={HardhatIcon}
                        title='Повышение безопасности'
                        description='Обеспечьте здоровье и благополучие людей,
                            работающих на вашей площадке.'
                        reverseBg
                    />
                </section>
            </MainLayout>
        </main>
    )
}
