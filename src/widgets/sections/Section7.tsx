import FeatureCard from '@/components/FeatureCard'
import FeaturePic1 from '%/images/section-7-1.png'
import FeaturePic2 from '%/images/section-7-2.png'
import FeaturePic3 from '%/images/section-7-3.png'

export const Section7 = () => {
    return (
        <section className='w-full mt-[136px] flex flex-col items-center'>
            <h2 className='font-inter text-[32px] leading-[48px] text-black'>
                Что такое СтройКонтроль?
            </h2>
            <div className='mb-7 text-center mt-5 font-inter text-xl leading-8 text-gray'>
                СтройКонтроль - это интеллектуальная система управления доставкой, <br />
                предоставляющая информацию и контроль материалов на сложных строительных <br />
                площадках в режиме реального времени.
            </div>
            <div className='flex flex-col gap-y-16'>
                <FeatureCard
                    title='Отслеживайте доставку по всей цепочке поставок'
                    description='От поставщика до субподрядчика - вы всегда знаете,
                        где находятся ваши материалы, благодаря чему обычные отходы уходят
                        в прошлое и сокращаются несчастные случаи на месте.'
                    image={FeaturePic1}
                />
                <FeatureCard
                    title='Оптимизируйте и контролируйте свое прибытие на место'
                    description='Транспортные средства доставки прибывают в фиксированные промежутки
                        времени в заранее назначенные отсеки, где разгрузочное
                        оборудование готово и ждет их.'
                    image={FeaturePic3}
                    isReversed
                />
                <FeatureCard
                    title='Возьмите под контроль данные в режиме реального времени'
                    description='Интеллектуальная отчетность дает вам возможность принимать
                        решения в зависимости от того, как обстоят дела в данный момент.
                        Больше никаких ручных отчетов по заливке бетона или ежемесячной
                        проверки 10.000 накладных со счетами,
                        все это доступно онлайн без каких-либо усилий.'
                    image={FeaturePic2}
                />
            </div>
        </section>
    )
}