import ChartIcon from '%/icons/chart-icon.svg'
import HardhatIcon from '%/icons/hardhat-icon.svg'
import IconBg1 from '@/svgs/IconBg1'
import IconBg2 from '@/svgs/IconBg2'
import ItemBlock from '@/components/ItemBlock'
import RecyclingIcon from '%/icons/recycling-icon.svg'

export const Section2 = () => {
    return (
        <section className='w-full flex justify-between mt-36'>
            <ItemBlock
                iconBackground={<IconBg1 />}
                icon={ChartIcon}
                title='Повышение эффективности'
                description='Эффективные проекты стоят дешевле и завершаются в срок.'
            />
            <ItemBlock
                iconBackground={<IconBg2 />}
                icon={RecyclingIcon}
                title='Снижение потерь'
                description='Тщательно отслеживайте движение стройматериалов,
                    чтобы избежать краж и повреждений.'
            />
            <ItemBlock
                iconBackground={<IconBg1 className='-scale-x-100' />}
                icon={HardhatIcon}
                title='Повышение безопасности'
                description='Обеспечьте здоровье и благополучие людей,
                    работающих на вашей площадке.'
            />
        </section>
    )
}