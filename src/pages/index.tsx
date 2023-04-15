import BgIcon1 from '../../public/bg-icon-1.svg'
import BgIcon2 from '../../public/bg-icon-2.svg'
import ChartIcon from '../../public/chart-icon.svg'
import HardhatIcon from '../../public/hardhat-icon.svg'
import ItemBlock from '@/components/ItemBlock'
import MainLayout from '@/layouts/MainLayout'
import RecyclingIcon from '../../public/recycling-icon.svg'

export default function Home() {
    return (
        <main className='flex flex-col items-center'>
            <MainLayout>
                <section>

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
