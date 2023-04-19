import { PageWithLayout } from '@/types/PageWithLayout'
import { Section1 } from '@/widgets/sections/Section1'
import { Section2 } from '@/widgets/sections/Section2'
import { Section3 } from '@/widgets/sections/Section3'
import { Section4 } from '@/widgets/sections/Section4'
import { Section6 } from '@/widgets/sections/Section6'

const Home: PageWithLayout = () => {
    return (
        <div className='flex flex-col items-center'>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section6 />
        </div >
    )
}

export default Home