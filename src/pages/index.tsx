import { PageWithLayout } from '@/types/PageWithLayout'
import { Section1 } from '@/widgets/sections/Section1'
import { Section2 } from '@/widgets/sections/Section2'
import { Section3 } from '@/widgets/sections/Section3'
import { Section4 } from '@/widgets/sections/Section4'
import Section5 from '@/widgets/sections/Section5'
import { Section6 } from '@/widgets/sections/Section6'
import { Section7 } from '@/widgets/sections/Section7'
import Section8 from '@/widgets/sections/Section8'
import Section9 from '@/widgets/sections/Section9'

const Home: PageWithLayout = () => {
    return (
        <div className='flex flex-col items-center'>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
        </div >
    )
}

export default Home