import BgIcon1 from '%/icons/bg-icon-1.svg'
import BgIcon2 from '%/icons/bg-icon-2.svg'
import ChartIcon from '%/icons/chart-icon.svg'
import HardhatIcon from '%/icons/hardhat-icon.svg'
import ItemBlock from '@/components/ItemBlock'
import RecyclingIcon from '%/icons/recycling-icon.svg'

export const Section2 = () => {
    return (
        <section className='w-full flex justify-between mt-36'>
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
    )
}